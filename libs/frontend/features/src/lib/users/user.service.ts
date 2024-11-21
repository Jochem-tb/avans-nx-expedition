import { Injectable } from '@angular/core';
import {
    IUser,
    UserRole,
    UserGender,
    UserExperienceLevel,
    UserSkills
} from '../../../../../../libs/shared/api/src';
import { delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private users: IUser[] = [];

    constructor(private httpClient: HttpClient) {
        console.log('Service constructor aanroepen');
    }

    getUsers(): IUser[] {
        console.log('getUsers aanroepen');
        return this.users;
    }

    getUsersAsync(): Observable<IUser[]> {
        console.log('getUsersAsync() aanroepen');
        return of(this.users).pipe(delay(500));
    }

    getUsersAsyncApi(): Observable<IUser[]> {
        return this.httpClient
            .get<{ results: IUser[] }>('http://localhost:3000/api/user')
            .pipe(map((response) => response.results)); // Extract 'results' array
    }

    getUserByIdApi(id: string | null): Observable<IUser> {
        console.log('getUserById aanroepen');
        return this.httpClient.get<IUser>(
            `http://localhost:3000/api/user/${id}`
        );
    }

    getUserById(id: string | null): Observable<IUser | undefined> {
        console.log('getUserById aanroepen');
        if (this.users.length === 0) {
            return this.getUsersAsyncApi().pipe(
                map((users) => {
                    this.users = users;
                    return this.users.find((user) => user._id === id);
                })
            );
        } else {
            return of(this.users.find((user) => user._id === id));
        }
    }
}
