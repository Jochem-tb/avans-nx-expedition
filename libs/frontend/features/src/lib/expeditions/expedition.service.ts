import { Injectable } from '@angular/core';
import { ICreateExpedition, IExpedition } from '../../../../../shared/api/src';
import { delay, forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Logger } from '@nestjs/common';

@Injectable({
    providedIn: 'root'
})
export class ExpeditionService {
    private expeditions: IExpedition[] = [];

    constructor(private httpClient: HttpClient) {
        console.log('Service constructor aanroepen');
    }

    getExpeditionsAsyncApi(): Observable<IExpedition[]> {
        return this.httpClient
            .get<{ results: IExpedition[] }>(
                'http://localhost:3000/api/expedition'
            )
            .pipe(map((response) => response.results)); // Extract 'results' array
    }

    getExpeditionByIdApi(
        id: string | null
    ): Observable<IExpedition | undefined> {
        console.log('getExpeditionById aanroepen');
        return this.httpClient
            .get<{ results: IExpedition }>(
                `http://localhost:3000/api/expedition/${id}`
            )
            .pipe(
                map((response) => response?.results) // Extract the 'results' property from the response
            );
    }

    updateExpedition(expedition: IExpedition): Observable<IExpedition> {
        console.log('updateExpedition aanroepen');
        return this.httpClient.put<IExpedition>(
            `http://localhost:3000/api/expedition/${expedition._id}`,
            expedition
        );
    }

    createExpedition(
        expedition: ICreateExpedition
    ): Observable<ICreateExpedition> {
        return this.httpClient.post<ICreateExpedition>(
            `http://localhost:3000/api/expedition`,
            expedition
        );
    }

    getExpeditionById(id: string | null): Observable<IExpedition | undefined> {
        console.log('getExpeditionById aanroepen');
        return this.getExpeditionsAsyncApi().pipe(
            map((expeditions) => {
                this.expeditions = expeditions;
                return this.expeditions.find(
                    (expedition) => expedition._id === id
                );
            })
        );
    }

    joinExpedition(
        id: string,
        userId: string
    ): Observable<IExpedition | undefined> {
        console.log('joinExpedition aanroepen');

        // Send the GET request to fetch the expedition and send the POST request in parallel
        return this.httpClient
            .get<{ results: IExpedition }>(
                `http://localhost:3000/api/expedition/${id}/join/${userId}`
            )
            .pipe(
                switchMap((response) => {
                    const expeditionObject = response?.results; // Extract the expedition object from the first API response

                    // Send the POST request (this won't return anything)
                    this.httpClient
                        .post(
                            `http://localhost:3100/api/users/joinExpedition`,
                            {
                                expeditionId: id,
                                userId: userId,
                                expeditionObject: expeditionObject // Include the expedition object in the request body
                            }
                        )
                        .subscribe(); // We don't need to handle the response from the POST request

                    // Return the expedition object from the first GET request
                    return of(expeditionObject); // Return the expedition object to the subscriber
                })
            );
    }

    leaveExpedition(
        id: string,
        userId: string
    ): Observable<IExpedition | undefined> {
        console.log('leaveExpedition aanroepen');

        // Send both requests in parallel using forkJoin
        return forkJoin({
            expedition: this.httpClient.get<{ results: IExpedition }>(
                `http://localhost:3000/api/expedition/${id}/leave/${userId}`
            ),
            user: this.httpClient.post<{ results: IExpedition }>(
                `http://localhost:3100/api/users/leaveExpedition`,
                { expeditionId: id, userId: userId }
            )
        }).pipe(
            map((response) => response.expedition?.results) // Extract the 'results' property from the first API response
        );
    }

    getRecommendedExpeditions(userId: string): Observable<IExpedition[]> {
        return this.httpClient
            .get<{ results: IExpedition[] }>(
                `http://localhost:3000/api/expedition/recommended/${userId}`
            )
            .pipe(map((response) => response.results)); // Extract 'results' array
    }
    getOrganisingExpeditions(userId: string): Observable<IExpedition[]> {
        return this.httpClient
            .get<{ results: IExpedition[] }>(
                `http://localhost:3000/api/expedition/organising/${userId}`
            )
            .pipe(map((response) => response.results)); // Extract 'results' array
    }
    getJoinedExpeditions(userId: string): Observable<IExpedition[]> {
        return this.httpClient
            .get<{ results: IExpedition[] }>(
                `http://localhost:3000/api/expedition/joined/${userId}`
            )
            .pipe(map((response) => response.results)); // Extract 'results' array
    }
}
