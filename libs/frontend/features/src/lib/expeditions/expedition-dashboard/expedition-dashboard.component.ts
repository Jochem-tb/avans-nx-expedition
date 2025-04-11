import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExpeditionService } from '../expedition.service';
import { IExpedition } from '@avans-nx-expedition/shared/api';
import { filter, forkJoin, Subscription } from 'rxjs';
import { ExpeditionEditComponent } from '../expedition-edit/expedition-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { AccountService } from '@avans-nx-expedition/frontend/account';

@Component({
    selector: 'avans-nx-expedition-expedition-dashboard',
    templateUrl: './expedition-dashboard.component.html',
    styleUrls: ['./expedition-dashboard.component.css']
})
export class ExpeditionDashboardComponent implements OnInit, OnDestroy {
    joinedExpeditions?: IExpedition[] = undefined;
    organisingExpeditions?: IExpedition[] = undefined;
    recommendedExpeditions?: IExpedition[] = undefined;

    joinedString = 'Login to see your joined expeditions';
    organisingString = 'Login to see your organising expeditions';
    recommendedString = 'Login to see your recommended expeditions';

    sub: Subscription = new Subscription();
    userId: string | null = null;

    constructor(
        private expeditionService: ExpeditionService,
        public dialog: MatDialog,
        private router: Router,
        private accountService: AccountService
    ) {}

    navigateToExpedition(id: string) {
        console.log('Navigating to expedition with ID:', id);
        this.router.navigate(['/expedition', id]);
    }

    ngOnInit(): void {
        console.log('ExpeditionDashboardComponent.ngOnInit() aangeroepen');
        this.accountService.checkToken().subscribe((isLoggedIn) => {
            if (isLoggedIn) {
                console.log('User is logged in');
                this.accountService.getLoggedInUserId().subscribe((userId) => {
                    console.log('Logged in user ID:', userId);

                    this.joinedString = 'You have not joined any expeditions:';
                    this.organisingString =
                        'You are not organising any expeditions:';
                    this.recommendedString =
                        'You have no recommended expeditions:';

                    this.userId = userId;
                    this.loadExpeditions();
                });
            } else {
                console.log('User is not logged in');
            }
        });
    }

    loadExpeditions(): void {
        console.log('Loading expeditions for user ID:', this.userId);
        if (!this.userId) {
            console.error(
                'User ID is null or undefined. Cannot load expeditions.'
            );
            return;
        }

        // Use forkJoin to load all expeditions concurrently
        const expeditions$ = forkJoin({
            joined: this.expeditionService.getJoinedExpeditions(this.userId),
            organising: this.expeditionService.getOrganisingExpeditions(
                this.userId
            ),
            recommended: this.expeditionService.getRecommendedExpeditions(
                this.userId
            )
        });

        // Subscribe to the combined observables
        this.sub.add(
            expeditions$.subscribe({
                next: (expeditions) => {
                    // Now expeditions contains all the data from the API calls
                    this.joinedExpeditions = expeditions.joined;
                    this.organisingExpeditions = expeditions.organising;
                    this.recommendedExpeditions = expeditions.recommended;
                },
                error: (err) => {
                    console.error('Error loading expeditions', err);
                }
            })
        );
    }

    ngOnDestroy(): void {
        console.log('ExpeditionDashboardComponent.ngOnDestroy() aangeroepen');
        this.sub.unsubscribe();
    }
}
