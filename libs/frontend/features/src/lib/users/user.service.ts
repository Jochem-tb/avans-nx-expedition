import { Injectable } from '@angular/core';
import {
    IUser,
    UserRole,
    UserGender,
    UserExperienceLevel,
    UserSkills,
    IUpdateUser
} from '../../../../../../libs/shared/api/src';
import { delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@avans-nx-expedition/shared/util-env';

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
            .get<{ results: IUser[] }>(environment.dataApiUrl + '/user')
            .pipe(map((response) => response.results)); // Extract 'results' array
    }

    getUserByIdApi(id: string | null): Observable<IUser> {
        console.log('getUserById aanroepen');
        return this.httpClient.get<IUser>(
            environment.dataApiUrl + `/user/${id}`
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

    updateUser(user: IUpdateUser): Observable<IUser> {
        const token = localStorage.getItem('apiToken');
        if (token) {
            console.log('Token found:', token);
        }
        return this.httpClient.put<IUser>(
            environment.dataApiUrl + `/user/${user._id}`,
            user,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
    }

    deleteUser(userId: string): Observable<void> {
        console.log('Deleting user with ID:', userId);
        const token = localStorage.getItem('apiToken');

        if (token) {
            console.log('Token found:', token);
        }
        return this.httpClient.delete<void>(
            environment.dataApiUrl + `/user/${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
    }
}
