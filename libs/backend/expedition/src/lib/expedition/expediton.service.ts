import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
    Expedition as ExpeditionModel,
    ExpeditionDocument
} from './expedition.schema';
import { Activity as ActivityModel, ActivityDocument } from './activity.schema';
import {
    IActivity,
    ICreateExpedition,
    IExpedition,
    IUser
} from '@avans-nx-expedition/shared/api';
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
        private expeditionModel: Model<ExpeditionDocument>,
        @InjectModel(ActivityModel.name)
        private activityModel: Model<ActivityDocument>
    ) {}

    async findAll(): Promise<IExpedition[]> {
        this.logger.log(`Finding all items`);
        const items = await this.expeditionModel
            .find()
            .populate('organizer')
            .populate('participants')
            .populate('activities')
            .exec();
        return items;
    }

    async findOne(_id: string): Promise<IExpedition | null> {
        this.logger.log(`finding expedition with id ${_id}`);
        const item = await this.expeditionModel
            .findOne({ _id })
            .populate('organizer')
            .populate('participants')
            .populate('activities')
            .exec();

        console.log('item in findOne', item);
        if (!item) {
            this.logger.debug('Item not found');
        }
        return item;
    }

    async delete(_id: string): Promise<IExpedition | null> {
        this.logger.log(`Deleting expedition with id ${_id}`);
        const item = await this.expeditionModel.findByIdAndDelete({ _id });
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
        this.logger.log(`Create expedition with title: ${expedition.title}`);

        // Extract the actual user ID from the nested object.
        expedition.organizer = (expedition.organizer as any).results._id;
        expedition.participants = (expedition.participants as any[]).map(
            (user) => (user.results ? user.results._id : user._id)
        );

        expedition.createdAt = new Date();
        expedition.updatedAt = new Date();

        const createdItem = await this.expeditionModel.create(expedition);
        return createdItem;
    }

    async createActivity(activity: any): Promise<any> {
        this.logger.log(`Create activity with title: ${activity.title}`);

        if (!activity._id || activity._id === '') {
            delete activity._id; // Remove _id if it exists
            const createdItem = await this.activityModel.create(activity);
            this.logger.log(`Created activity: ${createdItem}`);
            return createdItem;
        } else {
            // If _id exists, update the existing activity
            const existingActivity = await this.activityModel.findById(
                activity._id
            );
            if (existingActivity) {
                this.logger.log(`Updating existing activity: ${activity._id}`);
                const updatedActivity =
                    await this.activityModel.findByIdAndUpdate(
                        activity._id,
                        activity,
                        { new: true }
                    );

                this.logger.log(`Updated activity: ${updatedActivity}`);
                return updatedActivity;
            }
            this.logger.log(`Activity already exists with id: ${activity._id}`);
            return activity;
        }
    }

    async update(
        _id: string,
        expedition: UpdateExpeditionDto
    ): Promise<IExpedition | null> {
        this.logger.log(`Update expedition ${expedition.title}`);
        expedition.updatedAt = new Date();
        return this.expeditionModel.findByIdAndUpdate({ _id }, expedition);
    }

    async join(_id: string, userId: string): Promise<IExpedition | null> {
        try {
            this.logger.log(`Join expedition ${_id} with user ${userId}`);
            const expedition = await this.expeditionModel
                .findByIdAndUpdate(
                    { _id },
                    { $addToSet: { participants: userId } },
                    { new: true }
                )
                .populate('participants')
                .populate('organizer')
                .populate('activities')
                .exec();

            return expedition;
        } catch (error) {
            this.logger.error(`Error joining expedition: ${error}`);
            return null;
        }
    }

    async leave(_id: string, userId: string): Promise<IExpedition | null> {
        try {
            this.logger.log(`Leave expedition ${_id} with user ${userId}`);
            const expedition = await this.expeditionModel
                .findByIdAndUpdate(
                    { _id },
                    { $pull: { participants: userId } },
                    { new: true }
                )
                .populate('participants')
                .populate('organizer')
                .populate('activities');
            return expedition;
        } catch (error) {
            this.logger.error(`Error leaving expedition: ${error}`);
            return null;
        }
    }

    getRecommended(userId: string): Promise<IExpedition[] | null> {
        return this.expeditionModel
            .find({ organizer: { $ne: userId } })
            .populate('participants')
            .populate('organizer')
            .populate('activities')
            .exec()
            .then((expeditions) => {
                if (expeditions.length === 0) {
                    this.logger.debug(
                        `User: ${userId} has no recommended expeditions`
                    );
                    return null;
                }
                return expeditions;
            });
    }

    getJoined(userId: string): Promise<IExpedition[] | null> {
        return this.expeditionModel
            .find({ participants: userId })
            .populate('participants')
            .populate('organizer')
            .populate('activities')
            .exec()
            .then((expeditions) => {
                if (expeditions.length === 0) {
                    this.logger.debug(
                        `User: ${userId} has not joined to any expeditions`
                    );
                    return null;
                }
                return expeditions;
            });
    }

    getOrganising(userId: string): Promise<IExpedition[] | null> {
        return this.expeditionModel
            .find({ organizer: userId })
            .populate('participants')
            .populate('organizer')
            .populate('activities')
            .exec()
            .then((expeditions) => {
                if (expeditions.length === 0) {
                    this.logger.debug(
                        `User: ${userId} is not organizing any expeditions`
                    );
                    return null;
                }
                return expeditions;
            });
    }
}
