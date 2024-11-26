import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';
import {
    // ICreateUser,
    IUpdateUser,
    IUpsertUser,
    IUserRegistration,
    Id,
    UserExperienceLevel,
    UserGender,
    UserRole,
    UserSkills
} from '@avans-nx-expedition/shared/api';
import { Meal } from '@avans-nx-expedition/backend/features';

export class CreateUserDto implements IUserRegistration {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsString()
    @IsNotEmpty()
    emailAddress!: string;

    profileImgUrl!: string;
    phoneNumber!: string;
    ExperienceLevel!: UserExperienceLevel;
    Skills: UserSkills[] = [];
}

export class UpsertUserDto implements IUpsertUser {
    _id!: Id;

    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsString()
    @IsNotEmpty()
    emailAddress!: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber!: string;

    @IsBoolean()
    @IsNotEmpty()
    isActive!: boolean;

    @IsString()
    @IsNotEmpty()
    profileImgUrl = '';

    @IsString()
    @IsNotEmpty()
    meals: Meal[] = [];

    @IsString()
    @IsNotEmpty()
    role: UserRole = UserRole.Unknown;

    @IsString()
    @IsNotEmpty()
    gender: UserGender = UserGender.Unknown;

    @IsString()
    @IsNotEmpty()
    ExperienceLevel: UserExperienceLevel = UserExperienceLevel.Unknown;

    @IsString()
    @IsNotEmpty()
    Skills: UserSkills[] = [];
}

export class UpdateUserDto implements IUpdateUser {
    _id?: string | undefined;

    @IsString()
    @IsOptional()
    name!: string;
}
