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
    private loggedInUserId: string | null = null;
    private loggedInUser: IUserIdentity | null = null;
    private apiToken: string | undefined = undefined;

    constructor(private httpClient: HttpClient) {
        console.log('Service constructor aanroepen');
    }

    isLoggedIn(): boolean {
        if (this.loggedInUser) {
            alert('You are already logged in');
            console.log('You are already logged in');
        }
        return this.loggedInUser !== null;
    }

    login(credentials: IUserCredentials): Observable<IUserIdentity> {
        const response = this.httpClient.post<{
            results: IUserIdentity;
            info: any;
        }>('http://localhost:3000/api/auth/login', credentials);

        console.log('response', response);

        return response.pipe(
            map((apiResponse) => {
                console.log('return from logging in', apiResponse);

                // Extracting the 'results' object from the response
                const { results, info } = apiResponse;

                // Now 'results' should match your IUserIdentity interface
                const { token, ...userWithoutToken } = results;

                this.loggedInUser = userWithoutToken;
                this.apiToken = token;
                this.loggedInUserId = userWithoutToken._id;

                // Save token in a cookie
                console.log('Setting cookie', `apiToken=${token}; path=/;`);
                document.cookie = `apiToken=${token}; path=/;`;

                console.log('Logged in user', this.loggedInUser);
                console.log('Token', this.apiToken);
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
                this.loggedInUserId = null;

                // Remove the token cookie
                document.cookie =
                    'apiToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            })
        );
    }

    getLoggedInUser(): Observable<IUserIdentity | null> {
        return of(this.loggedInUser).pipe(delay(10));
    }

    getLoggedInUserId(): Observable<string | null> {
        return of(this.loggedInUserId).pipe(delay(10));
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
