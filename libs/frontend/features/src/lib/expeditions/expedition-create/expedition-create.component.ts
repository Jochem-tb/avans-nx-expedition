import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpeditionService } from '../expedition.service';
import { Expedition } from '@avans-nx-expedition/backend/expedition';
import { Subscription } from 'rxjs';
import {
    ContinentEnum,
    DifficultyLevel,
    ExpeditionStatus,
    ICreateExpedition
} from '@avans-nx-expedition/shared/api';

@Component({
    selector: 'avans-nx-expedition-expedition-create',
    templateUrl: './expedition-create.component.html',
    styleUrls: []
})
export class ExpeditionCreateComponent {
    expedition: ICreateExpedition = {
        title: '',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        difficultyLevel: DifficultyLevel.Unknown,
        status: ExpeditionStatus.Unknown,
        maxParticipants: 0,
        participants: [],
        organizer: 'https://cdn-icons-png.flaticon.com/512/3175/3175209.png',
        location: {
            name: '',
            continent: ContinentEnum.Unknown,
            latitude: 0,
            longitude: 0
        },
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3175/3175209.png',
        createdAt: new Date(),
        updatedAt: new Date()
    };

    difficultyLevels = Object.values(DifficultyLevel);
    statusus = Object.values(ExpeditionStatus);
    continents = Object.values(ContinentEnum);

    constructor(
        private route: ActivatedRoute,
        private expeditionService: ExpeditionService,
        private router: Router
    ) {}

    createExpedition(): void {
        // Ensure that the expedition object has been properly filled
        if (this.expedition) {
            this.expeditionService.createExpedition(this.expedition).subscribe(
                (createExpedition) => {
                    // Handle success (e.g., navigate back, show success message)
                    console.log(
                        'Expedition created successfully',
                        createExpedition
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
