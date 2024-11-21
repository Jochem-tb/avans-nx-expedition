import { Injectable } from '@angular/core';
import { IExpedition } from '../../../../../shared/api/src';
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
}
