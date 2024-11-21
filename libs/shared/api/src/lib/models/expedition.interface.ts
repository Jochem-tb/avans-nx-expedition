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
    address: string;
    continent: ContinentEnum;
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
    participants: string[];
    organizer: string;
    location: ILocation;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export type ICreateExpedition = Omit<
    IExpedition,
    '_id' | 'createdAt' | 'updatedAt'
>;

export type IUpdateExpedition = Partial<Omit<IExpedition, 'id'>>;
export type IUpsertExpedition = IExpedition;
