import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
        private expeditionService: ExpeditionService
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.expeditionId = params.get('id');
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

    // removeParticipant(participantId: string): void {
    //     this.expeditionService
    //         .removeParticipant(this.expeditionId, participantId)
    //         .subscribe((expedition) => {
    //             this.expedition = expedition;
    //         });
    // }
}
