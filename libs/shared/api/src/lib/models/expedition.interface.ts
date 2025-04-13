import { IUser } from './user.interface';

export enum DifficultyLevel {
    Easy = 'Easy',
    Moderate = 'Moderate',
    Hard = 'Hard',
    Unknown = 'Unknown'
}

export enum ExpeditionStatus {
    Open = 'Open',
    Closed = 'Closed',
    Cancelled = 'Cancelled',
    Ongoing = 'Ongoing',
    Completed = 'Completed',
    Unknown = 'Unknown'
}

export enum ContinentEnum {
    Africa = 'Africa',
    Antarctica = 'Antarctica',
    Asia = 'Asia',
    Europe = 'Europe',
    North_America = 'North America',
    Oceania = 'Oceania',
    South_America = 'South America',
    Unknown = 'Unknown'
}

export interface ILocation {
    latitude: number;
    longitude: number;
    name: string;
    continent: ContinentEnum;
}

export interface IExpeditionMongo {
    _id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    difficultyLevel: DifficultyLevel;
    status: ExpeditionStatus;
    maxParticipants: number;
    participants: string[];
    organizer: string;
    location: ILocation;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IExpedition {
    _id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    difficultyLevel: DifficultyLevel;
    status: ExpeditionStatus;
    maxParticipants: number;
    participants: (IUser | string)[];
    activities: (IActivity | string)[];
    organizer: IUser | string;
    location: ILocation;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IActivity {
    _id: string;
    title: string;
    description: string;
    date: Date;
    startTime: string; // e.g., "14:00"
    endTime: string; // e.g., "16:00"
    location: ILocation;
    gear: IGearItem[];
    difficultyLevel: DifficultyLevel; // Optional: Difficulty level of the activity
    notes: string; // Additional notes or instructions
}

export interface IGearItem {
    name: string;
    description: string;
    quantity: number;
    status: GearStatusEnum;
}

export enum GearStatusEnum {
    ToPack = 'To Pack',
    Packed = 'Packed',
    Missing = 'Missing',
    NotAvailable = 'Not Available'
}

export type ICreateExpedition = Omit<IExpedition, '_id'>;

export type IUpdateExpedition = Partial<Omit<IExpedition, '_id'>>;
export type IUpsertExpedition = IExpedition;
