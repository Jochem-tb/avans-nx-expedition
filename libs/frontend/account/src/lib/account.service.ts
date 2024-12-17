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

                // Remove the token cookie
                document.cookie =
                    'apiToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
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
