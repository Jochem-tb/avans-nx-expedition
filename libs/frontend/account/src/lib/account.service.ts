import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUserIdentity } from '@avans-nx-expedition/shared/api';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private loggedInUser: IUserIdentity | null = null;

    constructor(private httpClient: HttpClient) {
        console.log('Service constructor aanroepen');
    }
}
