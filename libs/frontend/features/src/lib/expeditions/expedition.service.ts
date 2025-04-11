import { Injectable } from '@angular/core';
import { ICreateExpedition, IExpedition } from '../../../../../shared/api/src';
import { delay, map, Observable, of } from 'rxjs';
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
        if (this.expeditions.length === 0) {
            return this.getExpeditionsAsyncApi().pipe(
                map((expeditions) => {
                    this.expeditions = expeditions;
                    return this.expeditions.find(
                        (expedition) => expedition._id === id
                    );
                })
            );
        } else {
            return of(
                this.expeditions.find((expedition) => expedition._id === id)
            );
        }
    }

    joinExpedition(
        id: string,
        userId: string
    ): Observable<IExpedition | undefined> {
        console.log('joinExpedition aanroepen');
        return this.httpClient
            .get<{ results: IExpedition }>(
                `http://localhost:3000/api/expedition/${id}/join/${userId}`
            )
            .pipe(
                map((response) => response?.results) // Extract the 'results' property from the response
            );
    }

    leaveExpedition(
        id: string,
        userId: string
    ): Observable<IExpedition | undefined> {
        console.log('leaveExpedition aanroepen');
        return this.httpClient
            .get<{ results: IExpedition }>(
                `http://localhost:3000/api/expedition/${id}/leave/${userId}`
            )
            .pipe(
                map((response) => response?.results) // Extract the 'results' property from the response
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
