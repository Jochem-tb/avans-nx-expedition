import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
    ICreateUser,
    IUserIdentity,
    IUserCredentials,
    IUserInfo
} from '@avans-nx-expedition/shared/api';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private loggedInUser: IUserIdentity | null = null;
    private apiToken: string | undefined = undefined;

    constructor(private httpClient: HttpClient) {
        console.log('Service constructor aanroepen');
    }

    login(credentials: IUserCredentials): Observable<IUserIdentity> {
        const reponse = this.httpClient.post<IUserIdentity>(
            'http://localhost:3000/api/auth/login',
            credentials
        );

        console.log('reponse', reponse);

        return reponse.pipe(
            map((user) => {
                const { token, ...userWithoutToken } = user;
                this.loggedInUser = userWithoutToken;
                this.apiToken = token;

                console.debug('Logged in user', userWithoutToken);
                console.debug('Token', token);
                return userWithoutToken;
            })
        );
    }

    logout(): Observable<void> {
        return of(null).pipe(
            delay(1000),
            map(() => {
                this.loggedInUser = null;
                this.apiToken = undefined;
            })
        );
    }

    getLoggedInUser(): Observable<IUserIdentity | null> {
        return of(this.loggedInUser).pipe(delay(1000));
    }

    register(user: ICreateUser): Observable<IUserInfo> {
        // debugger;
        console.log('Registering user', user);
        return this.httpClient.post<IUserInfo>(
            `http://localhost:3000/api/auth/register`,
            user
        );
    }
}
