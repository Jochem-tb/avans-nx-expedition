import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
// import { v4 as uuid } from 'uuid';
import {
    ICreateExpedition,
    IExpedition,
    IUpdateExpedition,
    IUpsertExpedition,
    DifficultyLevel,
    ExpeditionStatus,
    ILocation
} from '@avans-nx-expedition/shared/api';
import { IsMongoId } from 'class-validator';

export type ExpeditionDocument = Expedition & Document;

@Schema()
export class Expedition implements IExpedition {
    @IsMongoId()
    _id!: string;

    @Prop({ required: true, type: String })
    title!: string;

    @Prop({ required: true, type: String })
    description!: string;

    @Prop({ required: true, type: Date })
    startDate!: Date;

    @Prop({ required: true, type: Date })
    endDate!: Date;

    @Prop({ required: true, type: String })
    difficultyLevel!: DifficultyLevel;

    @Prop({ required: true, type: String })
    status!: ExpeditionStatus;

    @Prop({ required: true, type: Number })
    maxParticipants!: number;

    @Prop({ required: true, type: [String] })
    participants!: string[];

    @Prop({ required: true, type: String })
    organizer!: string;

    @Prop({ required: true, type: Object })
    location!: ILocation;

    @Prop({
        required: true,
        type: String,
        default: 'https://www.flaticon.com/free-icon/savannah_3175209'
    })
    imageUrl!: string;

    @Prop({ required: true, type: Date, default: new Date() })
    createdAt!: Date;

    @Prop({ required: true, type: Date, default: new Date() })
    updatedAt!: Date;
}

export const ExpeditionSchema = SchemaFactory.createForClass(Expedition);
