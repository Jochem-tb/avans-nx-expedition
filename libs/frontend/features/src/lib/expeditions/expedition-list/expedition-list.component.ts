import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExpeditionService } from '../expedition.service';
import { IExpedition } from '@avans-nx-expedition/shared/api';
import { Subscription } from 'rxjs';
import { ExpeditionEditComponent } from '../expedition-edit/expedition-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'avans-nx-expedition-expedition-list',
    templateUrl: './expedition-list.component.html',
    styles: []
})
export class ExpeditionListComponent implements OnInit, OnDestroy {
    expeditions?: IExpedition[] = undefined;
    sub: Subscription = new Subscription();

    constructor(
        private expeditionService: ExpeditionService,
        public dialog: MatDialog
    ) {}

    openDialog(): void {
        const dialogRef = this.dialog.open(ExpeditionEditComponent, {
            width: '400px', // Customize dialog size
            panelClass: 'expedition-edit-dialog' // Customize dialog style
            // data: expedition // Pass the data into the dialog component
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                console.log('Dialog Result:', result);
            }
        });
    }

    ngOnInit(): void {
        console.log('ExpeditionListComponent.ngOnInit() aangeroepen');
        this.sub.add(
            this.expeditionService.getExpeditionsAsyncApi().subscribe(
                (expeditions) => {
                    this.expeditions = expeditions;
                    console.log('Expeditions loaded:', expeditions);
                },
                (error) => {
                    console.error('Error loading expeditions:', error);
                }
            )
        );
    }

    ngOnDestroy(): void {
        if (this.sub) {
            console.log('Unsubscribing from expedition service');
            this.sub.unsubscribe();
        }
    }
}
