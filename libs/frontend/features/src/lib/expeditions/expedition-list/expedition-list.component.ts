import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExpeditionService } from '../expedition.service';
import { IExpedition } from '@avans-nx-expedition/shared/api';
import { filter, Subscription } from 'rxjs';
import { ExpeditionEditComponent } from '../expedition-edit/expedition-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { AccountService } from '@avans-nx-expedition/frontend/account';

@Component({
    selector: 'avans-nx-expedition-expedition-list',
    templateUrl: './expedition-list.component.html',
    styles: []
})
export class ExpeditionListComponent implements OnInit, OnDestroy {
    expeditions?: IExpedition[] = undefined;
    sub: Subscription = new Subscription();
    isLoggedIn = false;

    constructor(
        private expeditionService: ExpeditionService,
        public dialog: MatDialog,
        private router: Router,
        private accountService: AccountService
    ) {}

    ngOnInit(): void {
        console.log('ExpeditionListComponent.ngOnInit() aangeroepen');
        this.loadExpeditions();

        // Refresh when navigated to this component
        const routerSub = this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                console.log('Navigation ended – reloading expeditions');
                this.loadExpeditions();
            });

        this.sub.add(routerSub);

        this.accountService.checkToken().subscribe((isLoggedIn) => {
            this.isLoggedIn = isLoggedIn;
            console.log('User logged in:', isLoggedIn);
        });
    }

    ngOnDestroy(): void {
        if (this.sub) {
            console.log('Unsubscribing from expedition service');
            this.sub.unsubscribe();
        }
    }

    loadExpeditions(): void {
        this.expeditionService.getExpeditionsAsyncApi().subscribe(
            (expeditions) => {
                this.expeditions = expeditions;
                console.log('Expeditions loaded:', expeditions);
            },
            (error) => {
                console.error('Error loading expeditions:', error);
            }
        );
    }
}
