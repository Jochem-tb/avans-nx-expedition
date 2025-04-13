import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
// import { v4 as uuid } from 'uuid';
import {
    DifficultyLevel,
    ILocation,
    IUser,
    IActivity,
    IGearItem,
    IRole
} from '@avans-nx-expedition/shared/api';
import { IsMongoId } from 'class-validator';

export type RoleDocument = Role & Document;

@Schema()
export class Role implements IRole {
    @IsMongoId()
    _id!: string;

    @Prop({ required: true, type: String })
    title!: string;

    @Prop({ required: false, type: String })
    description!: string;

    @Prop({ required: false, type: String })
    responsibilities!: string;

    @Prop({ required: false, type: String })
    userId!: string;

    @Prop({ required: false, type: String })
    expeditionId!: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
