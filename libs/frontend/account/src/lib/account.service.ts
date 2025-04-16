import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
    ICreateUser,
    IUserIdentity,
    IUserCredentials,
    IUserInfo
} from '@avans-nx-expedition/shared/api';
import { jwtDecode } from 'jwt-decode';
import { environment } from '@avans-nx-expedition/shared/util-env';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private loggedInUserId: string | null = null;
    private loggedInUser: IUserIdentity | null = null;
    private apiToken: string | undefined = undefined;
    private loggedInSubject: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(false);

    constructor(private httpClient: HttpClient) {
        console.log('AccountService constructor aanroepen');
        this.updateLoginState();
    }

    private updateLoginState(): void {
        const token = localStorage.getItem('apiToken');
        const previousLoginState = this.loggedInSubject.getValue(); // Get the current state of loggedInSubject

        if (token) {
            this.apiToken = token;
            try {
                console.warn('Attempting to decode token:', token);
                const decodedToken: any = jwtDecode(token!);
                console.log('Decoded JWT:', decodedToken);

                // Check token expiration
                if (decodedToken.exp && Date.now() >= decodedToken.exp * 1000) {
                    console.warn('Token is expired. Clearing login state.');
                    localStorage.removeItem('apiToken');
                    this.loggedInUser = null;
                    this.loggedInUserId = null;

                    // Only update the state if it's actually changing
                    if (previousLoginState !== false) {
                        this.loggedInSubject.next(false);
                    }
                    return;
                }

                // Use decoded user_id to construct a minimal IUserIdentity
                this.loggedInUserId = decodedToken.user_id;

                // Only update the state if it's actually changing
                if (previousLoginState !== true) {
                    this.loggedInSubject.next(true);
                }
                console.log(
                    'Login state restored from token. User ID:',
                    this.loggedInUserId
                );
            } catch (error) {
                console.error('Error decoding token:', error);
                this.loggedInUser = null;
                this.loggedInUserId = null;

                // Only update the state if it's actually changing
                if (previousLoginState !== false) {
                    this.loggedInSubject.next(false);
                }
            }
        } else {
            console.log('No token found in localStorage');
            this.loggedInUser = null;
            this.loggedInUserId = null;

            // Only update the state if it's actually changing
            if (previousLoginState !== false) {
                this.loggedInSubject.next(false);
            }
        }
    }

    checkToken(): Observable<boolean> {
        // Update the state before returning in case the token has changed.
        this.updateLoginState();
        return this.loggedInSubject.asObservable();
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
        }>(environment.dataApiUrl + '/auth/login', credentials);

        console.log('response', response);

        return response.pipe(
            map((apiResponse) => {
                const { results } = apiResponse;
                const { token, ...userWithoutToken } = results;

                this.loggedInUser = userWithoutToken;
                this.apiToken = token;

                // ✅ Decode the token and extract user_id properly
                const decodedToken: any = jwtDecode(token!);
                this.loggedInUserId = decodedToken.user_id;

                console.log('Saving token to localStorage');

                try {
                    localStorage.setItem('apiToken', this.apiToken!);
                } catch (error) {
                    console.error(
                        'Error removing token from localStorage:',
                        error
                    );
                }

                this.loggedInSubject.next(true);

                console.log('Logged in user', this.loggedInUser);
                console.log('Decoded user_id from token:', this.loggedInUserId);
                return userWithoutToken;
            })
        );
    }

    logout(): Observable<void> {
        return of(null).pipe(
            delay(100),
            map(() => {
                this.apiToken = undefined;
                this.loggedInUserId = null;
                // Remove the token from localStorage
                try {
                    localStorage.removeItem('apiToken');
                } catch (error) {
                    console.error(
                        'Error removing token from localStorage:',
                        error
                    );
                }

                console.log('Logged out user', this.loggedInUser);
                this.loggedInUser = null;
                // Update the login state so that subscribers know the user is logged out.
                this.loggedInSubject.next(false);
            })
        );
    }

    getLoggedInUser(): Observable<IUserIdentity | null> {
        // Refresh the login state in case something changed in localStorage
        this.updateLoginState();
        console.log('getLoggedInUser called', this.loggedInUser);
        return of(this.loggedInUser).pipe(delay(10));
    }

    getLoggedInUserId(): Observable<string | null> {
        // Refresh the login state before returning the user id
        this.updateLoginState();
        const userId = this.loggedInUserId;
        console.log('getLoggedInUserId called', userId);
        return of(userId).pipe(delay(10));
    }

    register(user: ICreateUser): Observable<IUserInfo> {
        // debugger;
        console.log('Registering user', user);
        return this.httpClient.post<IUserInfo>(
            environment.dataApiUrl + `/auth/register`,
            user
        );
    }
}
