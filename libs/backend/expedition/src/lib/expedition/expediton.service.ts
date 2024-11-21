import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
    Expedition as ExpeditionModel,
    ExpeditionDocument
} from './expedition.schema';
import { IExpedition } from '@avans-nx-expedition/shared/api';
// import { Meal, MealDocument } from '@avans-nx-expedition/backend/features';
import {
    CreateExpeditionDto,
    UpdateExpeditionDto
} from '@avans-nx-expedition/backend/dto';
import { Observable, from, map } from 'rxjs';

@Injectable({})
export class ExpeditionService {
    private readonly logger: Logger = new Logger(ExpeditionService.name);

    constructor(
        @InjectModel(ExpeditionModel.name)
        private expeditionModel: Model<ExpeditionDocument> // @InjectModel(Meal.name) private meetupModel: Model<MealDocument>
    ) {}

    async findAll(): Promise<IExpedition[]> {
        this.logger.log(`Finding all items`);
        const items = await this.expeditionModel.find();
        return items;
    }

    // findAllInternal(): Observable<IExpedition[]> {
    //     this.logger.log('Finding all items');

    //     // Use .lean() to get plain objects and map to IUserInfo
    //     return from(
    //         this.expeditionModel
    //             .find()
    //             .lean()
    //             .then((users) => {
    //                 return users.map((user) => {
    //                     // Transform the MongoDB document into IUserInfo
    //                     return {
    //                         _id: user._id.toString(),
    //                         name: user.name,
    //                         password: user.password,
    //                         emailAddress: user.emailAddress,
    //                         phoneNumber: user.phoneNumber,
    //                         profileImgUrl: user.profileImgUrl,
    //                         ExperienceLevel: user.ExperienceLevel,
    //                         Skills: user.Skills,
    //                         role: user.role,
    //                         gender: user.gender,
    //                         isActive: user.isActive

    //                         // You can add more fields from your MongoDB model as needed
    //                     };
    //                 });
    //             })
    //     );
    // }

    async findOne(_id: string): Promise<IExpedition | null> {
        this.logger.log(`finding expedition with id ${_id}`);
        const item = await this.expeditionModel.findOne({ _id }).exec();
        if (!item) {
            this.logger.debug('Item not found');
        }
        return item;
    }

    async findManyByDifficultyLevel(
        difficultyLevel: string
    ): Promise<IExpedition[]> {
        this.logger.log(
            `Finding expeditions with difficulty level ${difficultyLevel}`
        );
        const items = this.expeditionModel.find({ difficultyLevel }).exec();
        return items;
    }

    async create(expedition: CreateExpeditionDto): Promise<IExpedition> {
        this.logger.log(`Create expedition with title:  ${expedition.title}`);
        const createdItem = this.expeditionModel.create(expedition);
        return createdItem;
    }

    async update(
        _id: string,
        expedition: UpdateExpeditionDto
    ): Promise<IExpedition | null> {
        this.logger.log(`Update expedition ${expedition.title}`);
        return this.expeditionModel.findByIdAndUpdate({ _id }, expedition);
    }
}
