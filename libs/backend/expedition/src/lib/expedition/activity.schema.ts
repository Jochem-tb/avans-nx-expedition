import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
// import { v4 as uuid } from 'uuid';
import {
    DifficultyLevel,
    ILocation,
    IUser,
    IActivity,
    IGearItem
} from '@avans-nx-expedition/shared/api';
import { IsMongoId } from 'class-validator';

export type ActivityDocument = Activity & Document;

@Schema()
export class Activity implements IActivity {
    @IsMongoId()
    _id!: string;

    @Prop({ required: true, type: String })
    title!: string;

    @Prop({ required: false, type: String })
    description!: string;

    @Prop({ required: true, type: Date })
    date!: Date;

    @Prop({ required: true, type: String })
    startTime!: string;

    @Prop({ required: true, type: String })
    endTime!: string;

    @Prop({ required: false, type: Object })
    gear!: IGearItem[];

    @Prop({ required: false, type: String })
    notes!: string;

    @Prop({ required: false, type: String })
    difficultyLevel!: DifficultyLevel;

    @Prop({ required: true, type: Object })
    location!: ILocation;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
