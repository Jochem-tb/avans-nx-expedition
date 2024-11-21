import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpeditionService } from '../expedition.service';
import { Expedition } from '@avans-nx-expedition/backend/expedition';
import { Subscription } from 'rxjs';

@Component({
    selector: 'avans-nx-expedition-expedition-details',
    templateUrl: './expedition-details.component.html',
    styles: []
})
export class ExpeditionDetailsComponent implements OnInit {
    expeditionId: string | null = null;
    expedition: Expedition | undefined;
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
}
