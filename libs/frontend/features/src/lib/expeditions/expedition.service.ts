import { Injectable } from '@angular/core';
import {
    IActivity,
    ICreateExpedition,
    IExpedition,
    IRole
} from '../../../../../shared/api/src';
import { delay, forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Logger } from '@nestjs/common';
import { environment } from '@avans-nx-expedition/shared/util-env';

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
                environment.dataApiUrl + '/expedition'
            )
            .pipe(map((response) => response.results)); // Extract 'results' array
    }

    getExpeditionByIdApi(
        id: string | null
    ): Observable<IExpedition | undefined> {
        console.log('getExpeditionById aanroepen');
        return this.httpClient
            .get<{ results: IExpedition }>(
                environment.dataApiUrl + `/expedition/${id}`
            )
            .pipe(
                map((response) => response?.results) // Extract the 'results' property from the response
            );
    }

    updateExpedition(expedition: IExpedition): Observable<IExpedition> {
        console.log('updateExpedition aanroepen');

        console.log('Save activities:', expedition.activities);
        // Step 1: Save all activities separately
        const activitySaves$ = expedition.activities.map((activity) => {
            return this.httpClient.post<{ results: IActivity }>(
                environment.dataApiUrl + `/expedition/activity`,
                activity
            );
        });

        console.log('Save roles:', expedition.roles);
        const roleSaves$ = expedition.roles.map((role) => {
            return this.httpClient.post<{ results: IRole }>(
                environment.dataApiUrl + `/expedition/role`,
                role
            );
        });

        // Step 2: Wait for both activities and roles to be saved
        return forkJoin({
            activityResponses: forkJoin(activitySaves$), // returns an array of activity save responses
            roleResponses: forkJoin(roleSaves$) // returns an array of role save responses
        }).pipe(
            switchMap(({ activityResponses, roleResponses }) => {
                console.log('Activity Responses:', activityResponses);
                console.log('Role Responses:', roleResponses);

                // Replace activities with only their ObjectIds
                const activityIds = activityResponses.map(
                    (res) => res.results._id
                );
                // Replace roles with only their ObjectIds (if you want to save the role references as well)
                const roleIds = roleResponses.map((res) => res.results._id);

                // Combine the IDs into the expedition object
                const updatedExpedition = {
                    ...expedition,
                    activities: activityIds,
                    // Assuming your expedition model supports a roles field:
                    roles: roleIds
                };

                console.log('Updated expedition to save:', updatedExpedition);
                console.log('Activity IDs:', activityIds);
                console.log('Role IDs:', roleIds);

                // Step 3: Update the expedition with the new references
                return this.httpClient.put<{ results: IExpedition }>(
                    environment.dataApiUrl + `/expedition/${expedition._id}`,
                    updatedExpedition
                );
            }),
            switchMap((response) => {
                const expeditionObject = response.results;
                console.log('Expedition updated:', expeditionObject);

                // Optional: Notify other systems (e.g., Neo4J)
                this.httpClient
                    .put(
                        environment.dataApiUrl +
                            `/recommendations/expedition/${expedition._id}`,
                        { expedition: expeditionObject }
                    )
                    .subscribe();

                return of(expeditionObject);
            })
        );
    }

    createExpedition(
        expedition: ICreateExpedition
    ): Observable<ICreateExpedition> {
        return this.httpClient.post<ICreateExpedition>(
            environment.dataApiUrl + `/expedition`,
            expedition
        );
    }

    deleteExpedition(id: string): Observable<any> {
        console.log('deleteExpedition aanroepen');
        return this.httpClient
            .delete<any>(environment.dataApiUrl + `/expedition/${id}`)
            .pipe(
                switchMap((response) => {
                    const expeditionObject = response?.results; // Extract the expedition object from the first API response

                    console.log('deleteExpedition neo4J');
                    this.httpClient
                        .delete(
                            environment.dataApiUrl +
                                `/recommendations/expedition/${id}`
                        )
                        .subscribe();

                    // Return the expedition object from the first GET request
                    return of(expeditionObject); // Return the expedition object to the subscriber
                })
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
                environment.dataApiUrl + `/expedition/${id}/join/${userId}`
            )
            .pipe(
                switchMap((response) => {
                    const expeditionObject = response?.results; // Extract the expedition object from the first API response

                    // Send the POST request (this won't return anything)
                    this.httpClient
                        .post(
                            environment.dataApiUrl +
                                `/recommendations/joinExpedition`,
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
                environment.dataApiUrl + `/expedition/${id}/leave/${userId}`
            ),
            user: this.httpClient.post<{ results: IExpedition }>(
                environment.dataApiUrl + `/recommendations/leaveExpedition`,
                { expeditionId: id, userId: userId }
            )
        }).pipe(
            map((response) => response.expedition?.results) // Extract the 'results' property from the first API response
        );
    }

    getRecommendedExpeditions(userId: string): Observable<IExpedition[]> {
        return this.httpClient
            .get<{ results: any[] }>(
                environment.dataApiUrl + `/recommendations/${userId}`
            )
            .pipe(
                map((response) => response.results), // Extract 'results' array
                switchMap((neoExpeditionObject) => {
                    const expeditionRequests = neoExpeditionObject.map(
                        (neoExpeditionObject) =>
                            this.getExpeditionByIdApi(neoExpeditionObject.id) // Assuming you have a method to fetch expeditions by ID
                    );
                    return forkJoin(expeditionRequests).pipe(
                        map((results) =>
                            results.filter(
                                (expedition): expedition is IExpedition =>
                                    !!expedition
                            )
                        )
                    );
                })
            );
    }

    getOrganisingExpeditions(userId: string): Observable<IExpedition[]> {
        return this.httpClient
            .get<{ results: IExpedition[] }>(
                environment.dataApiUrl + `/expedition/organising/${userId}`
            )
            .pipe(map((response) => response.results)); // Extract 'results' array
    }
    getJoinedExpeditions(userId: string): Observable<IExpedition[]> {
        return this.httpClient
            .get<{ results: IExpedition[] }>(
                environment.dataApiUrl + `/expedition/joined/${userId}`
            )
            .pipe(map((response) => response.results)); // Extract 'results' array
    }
}
