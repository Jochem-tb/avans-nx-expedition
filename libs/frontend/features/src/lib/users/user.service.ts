import { Injectable } from '@angular/core';
import {
    IUser,
    UserRole,
    UserGender,
    UserExperienceLevel,
    UserSkills
} from '../../../../../../libs/shared/api/src';
import { delay, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    readonly users: IUser[] = [
        {
            _id: '1',
            name: 'Isaac Gibson',
            emailAddress: 'isaac.gibson@example.com',
            phoneNumber: '06-123456',
            profileImgUrl: 'https://randomuser.me/api/portraits/men/16.jpg',
            role: UserRole.Unknown,
            gender: UserGender.Male,
            password: 'secret',
            isActive: true,
            meals: [],
            Skills: [UserSkills.Foraging, UserSkills.Navigation],
            ExperienceLevel: UserExperienceLevel.Intermediate
        },
        {
            _id: '2',
            name: 'Anne Williams',
            emailAddress: 'anne.williams@example.com',
            phoneNumber: '06-1234562',
            profileImgUrl: 'https://randomuser.me/api/portraits/women/40.jpg',
            role: UserRole.Unknown,
            gender: UserGender.Female,
            password: 'secret',
            isActive: true,
            meals: [],
            Skills: [UserSkills.Cooking, UserSkills.First_Aid],
            ExperienceLevel: UserExperienceLevel.Beginner
        },
        {
            _id: '3',
            name: 'Peter Post',
            emailAddress: 'peter.post@example.com',
            phoneNumber: '06-123456',
            profileImgUrl: 'https://randomuser.me/api/portraits/men/18.jpg',
            role: UserRole.Guest,
            gender: UserGender.Male,
            password: 'secret',
            isActive: true,
            meals: [],
            Skills: [
                UserSkills.Fire_Making,
                UserSkills.Fishing,
                UserSkills.Hunting,
                UserSkills.Navigation
            ],
            ExperienceLevel: UserExperienceLevel.Expert
        },
        {
            _id: '4',
            name: 'Lucy Harper',
            emailAddress: 'lucy.harper@example.com',
            phoneNumber: '06-987654',
            profileImgUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
            role: UserRole.Admin,
            gender: UserGender.Female,
            password: 'supersecure',
            isActive: true,
            meals: [],
            Skills: [UserSkills.Knot_Tying, UserSkills.Shelter_Building],
            ExperienceLevel: UserExperienceLevel.Advanced
        },
        {
            _id: '5',
            name: 'Daniel Grant',
            emailAddress: 'daniel.grant@example.com',
            phoneNumber: '06-555432',
            profileImgUrl: 'https://randomuser.me/api/portraits/men/30.jpg',
            role: UserRole.Unknown,
            gender: UserGender.Male,
            password: '1234password',
            isActive: false,
            meals: [],
            Skills: [UserSkills.Cooking, UserSkills.Fire_Making],
            ExperienceLevel: UserExperienceLevel.Intermediate
        },
        {
            _id: '6',
            name: 'Emily Clarke',
            emailAddress: 'emily.clarke@example.com',
            phoneNumber: '06-654321',
            profileImgUrl: 'https://randomuser.me/api/portraits/women/60.jpg',
            role: UserRole.Unknown,
            gender: UserGender.Female,
            password: 'mypassword123',
            isActive: true,
            meals: [],
            Skills: [UserSkills.Cooking, UserSkills.Foraging],
            ExperienceLevel: UserExperienceLevel.Beginner
        },
        {
            _id: '7',
            name: 'Oliver Scott',
            emailAddress: 'oliver.scott@example.com',
            phoneNumber: '06-111222',
            profileImgUrl: 'https://randomuser.me/api/portraits/men/44.jpg',
            role: UserRole.Unknown,
            gender: UserGender.Male,
            password: 'topsecret',
            isActive: true,
            meals: [],
            Skills: [UserSkills.Hunting, UserSkills.Trapping],
            ExperienceLevel: UserExperienceLevel.Advanced
        },
        {
            _id: '8',
            name: 'Sophia Brown',
            emailAddress: 'sophia.brown@example.com',
            phoneNumber: '06-999888',
            profileImgUrl: 'https://randomuser.me/api/portraits/women/29.jpg',
            role: UserRole.Unknown,
            gender: UserGender.Female,
            password: 'secureme',
            isActive: true,
            meals: [],
            Skills: [
                UserSkills.First_Aid,
                UserSkills.Water_Purification,
                UserSkills.Swimming
            ],
            ExperienceLevel: UserExperienceLevel.Intermediate
        },
        {
            _id: '9',
            name: 'Ethan Bennett',
            emailAddress: 'ethan.bennett@example.com',
            phoneNumber: '06-333777',
            profileImgUrl: 'https://randomuser.me/api/portraits/men/50.jpg',
            role: UserRole.Admin,
            gender: UserGender.Male,
            password: 'letmein123',
            isActive: false,
            meals: [],
            Skills: [UserSkills.Navigation, UserSkills.Fishing],
            ExperienceLevel: UserExperienceLevel.Expert
        },
        {
            _id: '10',
            name: 'Mia Anderson',
            emailAddress: 'mia.anderson@example.com',
            phoneNumber: '06-444555',
            profileImgUrl: 'https://randomuser.me/api/portraits/women/35.jpg',
            role: UserRole.Guest,
            gender: UserGender.Female,
            password: 'mypassword',
            isActive: true,
            meals: [],
            Skills: [UserSkills.Cooking, UserSkills.Foraging],
            ExperienceLevel: UserExperienceLevel.Beginner
        }
    ];

    constructor() {
        console.log('Service constructor aanroepen');
    }

    getUsers(): IUser[] {
        console.log('getUsers aanroepen');
        return this.users;
    }

    getUsersAsync(): Observable<IUser[]> {
        console.log('getUsersAsync() aanroepen');
        return of(this.users).pipe(delay(2000));
    }

    getUserById(id: string | null): IUser {
        console.log('getUserById aanroepen');
        return this.users.filter((user) => user._id === id)[0];
    }

    /**
     * Asynchrone versie voor het ophalen van 1 user nij gegeven Id.
     * @param id
     * @returns
     */

    getUserByIdAsync(id: string | null): Observable<IUser> {
        console.log('getUserByIdAsync aanroepen');
        return of(this.getUserById(id)).pipe(delay(2000));
    }
}
