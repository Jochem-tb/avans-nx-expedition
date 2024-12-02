import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpeditionService } from '../expedition.service';
import { Expedition } from '@avans-nx-expedition/backend/expedition';
import { Subscription } from 'rxjs';
import {
    ContinentEnum,
    DifficultyLevel,
    ExpeditionStatus
} from '@avans-nx-expedition/shared/api';

@Component({
    selector: 'avans-nx-expedition-expedition-edit',
    templateUrl: './expedition-edit.component.html',
    styleUrls: ['./expedition-edit.component.css']
})
export class ExpeditionEditComponent implements OnInit {
    expeditionId: string | null = null;
    expedition: Expedition | undefined;

    difficultyLevels = Object.values(DifficultyLevel);
    statusus = Object.values(ExpeditionStatus);
    continents = Object.values(ContinentEnum);
    sub: Subscription = new Subscription();

    constructor(
        private route: ActivatedRoute,
        private expeditionService: ExpeditionService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.expeditionId = params.get('id');
            console.log('Expedition ID:', this.expeditionId);
            this.expeditionService
                .getExpeditionById(String(this.expeditionId))
                .subscribe((expedition) => {
                    this.expedition = expedition;
                    console.log('Expedition:', this.expedition);
                });
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    saveExpedition(): void {
        // Ensure that the expedition object has been properly filled
        if (this.expedition) {
            this.expeditionService.updateExpedition(this.expedition).subscribe(
                (updatedExpedition) => {
                    // Handle success (e.g., navigate back, show success message)
                    console.log(
                        'Expedition saved successfully',
                        updatedExpedition
                    );
                    this.router.navigate(['/expeditions']);
                    // You can navigate back or show a success message here
                },
                (error) => {
                    // Handle error (e.g., show error message)
                    console.error('Error saving expedition', error);
                }
            );
        }
    }
}
