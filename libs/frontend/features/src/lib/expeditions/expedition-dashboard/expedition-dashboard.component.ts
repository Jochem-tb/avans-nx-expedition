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

        this.loadJoinedExpeditions();
        this.loadOrganisingExpeditions();
        this.loadRecommendedExpeditions();
    }

    private loadJoinedExpeditions(): void {
        console.log('Loading joined expeditions for user ID:', this.userId);
        if (!this.userId) return;

        this.sub.add(
            this.expeditionService.getJoinedExpeditions(this.userId).subscribe({
                next: (joined) => {
                    this.joinedExpeditions = joined;
                },
                error: (err) => {
                    console.error('Error loading joined expeditions', err);
                }
            })
        );
    }

    private loadOrganisingExpeditions(): void {
        console.log('Loading organising expeditions for user ID:', this.userId);
        if (!this.userId) return;

        this.sub.add(
            this.expeditionService.getOrganisingExpeditions(this.userId).subscribe({
                next: (organising) => {
                    this.organisingExpeditions = organising;
                },
                error: (err) => {
                    console.error('Error loading organising expeditions', err);
                }
            })
        );
    }

    private loadRecommendedExpeditions(): void {
        console.log('Loading recommended expeditions for user ID:', this.userId);
        if (!this.userId) return;

        this.sub.add(
            this.expeditionService.getRecommendedExpeditions(this.userId).subscribe({
                next: (recommended) => {
                    this.recommendedExpeditions = recommended;
                },
                error: (err) => {
                    console.error('Error loading recommended expeditions', err);
                }
            })
        );
    }

    ngOnDestroy(): void {
        console.log('ExpeditionDashboardComponent.ngOnDestroy() aangeroepen');
        this.sub.unsubscribe();
    }
}
