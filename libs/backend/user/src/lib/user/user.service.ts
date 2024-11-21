import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User as UserModel, UserDocument } from './user.schema';
import { IUser, IUserInfo } from '@avans-nx-expedition/shared/api';
// import { Meal, MealDocument } from '@avans-nx-expedition/backend/features';
import { CreateUserDto, UpdateUserDto } from '@avans-nx-expedition/backend/dto';
import { Observable, from, map } from 'rxjs';

@Injectable({})
export class UserService {
    private readonly logger: Logger = new Logger(UserService.name);

    constructor(
        @InjectModel(UserModel.name) private userModel: Model<UserDocument> // @InjectModel(Meal.name) private meetupModel: Model<MealDocument>
    ) {}

    async findAll(): Promise<IUserInfo[]> {
        this.logger.log(`Finding all items`);
        const items = await this.userModel.find();
        return items;
    }

    findAllInternal(): Observable<IUserInfo[]> {
        this.logger.log('Finding all items');

        // Use .lean() to get plain objects and map to IUserInfo
        return from(
            this.userModel
                .find()
                .lean()
                .then((users) => {
                    return users.map((user) => {
                        // Transform the MongoDB document into IUserInfo
                        return {
                            _id: user._id.toString(),
                            name: user.name,
                            password: user.password,
                            emailAddress: user.emailAddress,
                            phoneNumber: user.phoneNumber,
                            profileImgUrl: user.profileImgUrl,
                            ExperienceLevel: user.ExperienceLevel,
                            Skills: user.Skills,
                            role: user.role,
                            gender: user.gender,
                            isActive: user.isActive

                            // You can add more fields from your MongoDB model as needed
                        };
                    });
                })
        );
    }

    async findOne(_id: string): Promise<IUser | null> {
        this.logger.log(`finding user with id ${_id}`);
        const item = await this.userModel.findOne({ _id }).exec();
        if (!item) {
            this.logger.debug('Item not found');
        }
        return item;
    }

    async findOneByEmail(email: string): Promise<IUserInfo | null> {
        this.logger.log(`Finding user by email ${email}`);
        const item = this.userModel
            .findOne({ emailAddress: email })
            .select('-password')
            .exec();
        return item;
    }

    async findManyByExperienceLevel(
        experienceLevel: string
    ): Promise<IUserInfo[]> {
        this.logger.log(
            `Finding users with experience level ${experienceLevel}`
        );
        const items = this.userModel.find({ experienceLevel }).exec();
        return items;
    }

    async create(user: CreateUserDto): Promise<IUserInfo> {
        this.logger.log(`Create user ${user.name}`);
        const createdItem = this.userModel.create(user);
        return createdItem;
    }

    async update(_id: string, user: UpdateUserDto): Promise<IUserInfo | null> {
        this.logger.log(`Update user ${user.name}`);
        return this.userModel.findByIdAndUpdate({ _id }, user);
    }
}
