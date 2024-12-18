import { Injectable } from '@angular/core';
import { ICreateExpedition, IExpedition } from '../../../../../shared/api/src';
import { delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

    getExpeditionByIdApi(id: string | null): Observable<IExpedition> {
        console.log('getExpeditionById aanroepen');
        return this.httpClient.get<IExpedition>(
            `http://localhost:3000/api/expedition/${id}`
        );
    }

    updateExpedition(expedition: IExpedition): Observable<IExpedition> {
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
}
