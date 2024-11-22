import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsOptional,
    IsDate
} from 'class-validator';
import {
    DifficultyLevel,
    ExpeditionStatus,
    ICreateExpedition,
    IExpedition,
    ILocation,
    IUpdateExpedition,
    // ICreateUser,
    IUpdateUser,
    IUpsertExpedition,
    IUpsertUser,
    IUserRegistration,
    Id,
    UserExperienceLevel,
    UserGender,
    UserRole,
    UserSkills
} from '@avans-nx-expedition/shared/api';
import { Meal } from '@avans-nx-expedition/backend/features';

export class CreateExpeditionDto implements ICreateExpedition {
    title!: string;
    description!: string;
    startDate!: Date;
    endDate!: Date;
    difficultyLevel!: DifficultyLevel;
    status!: ExpeditionStatus;
    maxParticipants!: number;
    participants!: string[];
    organizer!: string;
    location!: ILocation;
    imageUrl!: string;
    createdAt!: Date;
    updatedAt!: Date;
}

export class UpsertExpeditionDto implements IUpsertExpedition {
    @IsString()
    @IsNotEmpty()
    _id!: string;

    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsDate()
    @IsNotEmpty()
    startDate!: Date;

    @IsDate()
    @IsNotEmpty()
    endDate!: Date;

    @IsString()
    @IsNotEmpty()
    difficultyLevel!: DifficultyLevel;

    @IsString()
    @IsNotEmpty()
    status!: ExpeditionStatus;

    @IsNotEmpty()
    maxParticipants!: number;

    @IsString({ each: true })
    participants!: string[];

    @IsString()
    @IsNotEmpty()
    organizer!: string;

    @IsNotEmpty()
    location!: ILocation;

    @IsString()
    imageUrl!: string;

    createdAt!: Date;
    updatedAt!: Date;
}

export class UpdateExpeditionDto implements IUpdateExpedition {
    _id?: string | undefined;
    updatedAt?: Date | undefined;

    @IsString()
    @IsOptional()
    title!: string;
}
