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
            gender: UserGender.Male,
            password: 'secret',
            isActive: true,
            meals: [],
            Skills: [UserSkills.Cooking, UserSkills.First_Aid],
            ExperienceLevel: UserExperienceLevel.Beginner
        },
        {
            _id: '3',
            name: 'Peter Post',
            emailAddress: 'Peter.post@example.com',
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
