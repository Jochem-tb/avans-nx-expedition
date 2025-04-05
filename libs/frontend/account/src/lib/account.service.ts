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
        if (token) {
            this.apiToken = token;
            try {
                console.warn('Attempting to decode token:', token);
                const decodedToken: any = jwtDecode(token);
                console.log('Decoded JWT:', decodedToken);

                // Check token expiration
                if (decodedToken.exp && Date.now() >= decodedToken.exp * 1000) {
                    console.warn('Token is expired. Clearing login state.');
                    localStorage.removeItem('apiToken');
                    this.loggedInUser = null;
                    this.loggedInUserId = null;
                    this.loggedInSubject.next(false);
                    return;
                }

                // Use decoded user_id to construct a minimal IUserIdentity
                this.loggedInUserId = decodedToken.user_id;

                this.loggedInSubject.next(true);
                console.log(
                    'Login state restored from token. User ID:',
                    this.loggedInUserId
                );
            } catch (error) {
                console.error('Error decoding token:', error);
                this.loggedInUser = null;
                this.loggedInUserId = null;
                this.loggedInSubject.next(false);
            }
        } else {
            console.log('No token found in localStorage');
            this.loggedInUser = null;
            this.loggedInUserId = null;
            this.loggedInSubject.next(false);
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
        }>('http://localhost:3000/api/auth/login', credentials);

        console.log('response', response);

        return response.pipe(
            map((apiResponse) => {
                console.log('return from logging in', apiResponse);
                // Extract the 'results' object from the response
                const { results } = apiResponse;
                // Destructure token from the results
                const { token, ...userWithoutToken } = results;

                this.loggedInUser = userWithoutToken;
                this.apiToken = token;
                this.loggedInUserId = userWithoutToken._id;

                // Save token in localStorage
                console.log('Saving token to localStorage');
                localStorage.setItem('apiToken', this.apiToken!);

                // Update the login state so all subscribers (like the header) know the user is logged in.
                this.loggedInSubject.next(true);

                console.log('Logged in user', this.loggedInUser);
                console.log('Token', this.apiToken);
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
                localStorage.removeItem('apiToken');
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
            `http://localhost:3000/api/auth/register`,
            user
        );
    }
}
