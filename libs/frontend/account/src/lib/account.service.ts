import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
    ICreateUser,
    IUserIdentity,
    IUserInfo
} from '@avans-nx-expedition/shared/api';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private loggedInUser: IUserIdentity | null = null;

    constructor(private httpClient: HttpClient) {
        console.log('Service constructor aanroepen');
    }

    login(email: string, password: string): Observable<IUserIdentity> {
        return this.httpClient
            .post<IUserIdentity>('/api/login', { email, password })
            .pipe(
                delay(1000),
                map((user) => {
                    this.loggedInUser = user;
                    return user;
                })
            );
    }

    logout(): Observable<void> {
        return of(null).pipe(
            delay(1000),
            map(() => {
                this.loggedInUser = null;
            })
        );
    }

    getLoggedInUser(): Observable<IUserIdentity | null> {
        return of(this.loggedInUser).pipe(delay(1000));
    }

    register(user: ICreateUser): Observable<IUserInfo> {
        debugger;
        return this.httpClient.post<IUserInfo>(
            'http://localhost:3000/api/auth/register',
            user
        );
    }
}
