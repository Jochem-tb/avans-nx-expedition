import { IEntity } from 'libs/share-a-meal/common/src/lib/entity/entity.model';
import { IMeal } from './meal.interface';
import { IToken, IUserRegistration } from './auth.interface';
import { Id } from './id.type';

export enum UserRole {
    Guest = 'Guest',
    Admin = 'Admin',
    Unknown = 'Unknown'
}

export enum UserGender {
    Male = 'Male',
    Female = 'Female',
    None = 'None',
    Unknown = 'Unknown'
}

export enum UserExperienceLevel {
    Beginner = 'Beginner',
    Intermediate = 'Intermediate',
    Advanced = 'Advanced',
    Expert = 'Expert',
    Unknown = 'Unknown'
}

export enum UserSkills {
    First_Aid = 'First aid',
    Navigation = 'Navigation',
    Cooking = 'Cooking',
    Shelter_Building = 'Shelter building',
    Fire_Making = 'Fire making',
    Fishing = 'Fishing',
    Hunting = 'Hunting',
    Trapping = 'Trapping',
    Foraging = 'Foraging',
    Water_Purification = 'Water purification',
    Knot_Tying = 'Knot tying',
    Climbing = 'Climbing',
    Swimming = 'Swimming',
    Unknown = 'Unknown'
}

/**
 * Minimal user information
 */

export interface IUserIdentity extends IEntity {
    name: string;
    emailAddress: string;
    profileImgUrl: string;
    role: UserRole;
    token?: string;
}

/**
 * All user information, excl. domain entities
 */
export interface IUserInfo extends IUserRegistration {
    _id: string;
    profileImgUrl: string;
    phoneNumber: string;
    role: UserRole;
    experienceLevel: UserExperienceLevel;
    skills: UserSkills[];
    gender: UserGender;
    isActive: boolean;
}

/**
 * All user information, incl. domain entities
 */
export interface IUser extends IUserInfo {}

export type ICreateUser = Pick<IUser, 'name' | 'password' | 'emailAddress'>;
export type IUpdateUser = Partial<Omit<IUser, 'id'>>;
export type IUpsertUser = IUser;
