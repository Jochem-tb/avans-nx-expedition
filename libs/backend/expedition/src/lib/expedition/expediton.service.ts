import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
    Expedition as ExpeditionModel,
    ExpeditionDocument
} from './expedition.schema';
import {
    ICreateExpedition,
    IExpedition
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
        private expeditionModel: Model<ExpeditionDocument> // @InjectModel(Meal.name) private meetupModel: Model<MealDocument>
    ) {}

    async findAll(): Promise<IExpedition[]> {
        this.logger.log(`Finding all items`);
        const items = await this.expeditionModel.find();
        return items;
    }

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
        expedition.createdAt = new Date();
        expedition.updatedAt = new Date();
        const createdItem = this.expeditionModel.create(expedition);
        return createdItem;
    }

    async update(
        _id: string,
        expedition: UpdateExpeditionDto
    ): Promise<IExpedition | null> {
        this.logger.log(`Update expedition ${expedition.title}`);
        expedition.updatedAt = new Date();
        return this.expeditionModel.findByIdAndUpdate({ _id }, expedition);
    }
}
