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
    IActivity,
    ICreateExpedition,
    IExpedition,
    ILocation,
    IUpdateExpedition,
    // ICreateUser,
    IUpdateUser,
    IUpsertExpedition,
    IUpsertUser,
    IUser,
    IUserRegistration,
    Id,
    UserExperienceLevel,
    UserGender,
    UserRole,
    UserSkills
} from '@avans-nx-expedition/shared/api';
import { Meal } from '@avans-nx-expedition/backend/features';

export class CreateExpeditionDto implements ICreateExpedition {
    activities!: (string | IActivity)[];
    title!: string;
    description!: string;
    startDate!: Date;
    endDate!: Date;
    difficultyLevel!: DifficultyLevel;
    status!: ExpeditionStatus;
    maxParticipants!: number;
    participants!: IUser[];
    organizer!: IUser;
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
    participants!: IUser[];

    @IsString({ each: true })
    activities!: (string | IActivity)[];

    @IsString()
    @IsNotEmpty()
    organizer!: IUser;

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
