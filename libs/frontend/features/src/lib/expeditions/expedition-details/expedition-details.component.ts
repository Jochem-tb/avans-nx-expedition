import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpeditionService } from '../expedition.service';
import { Expedition } from '@avans-nx-expedition/backend/expedition';
import { Subscription } from 'rxjs';
import { User, UserService } from '@avans-nx-expedition/backend/user';
import { AccountService } from '@avans-nx-expedition/frontend/account'; // Adjust the path if necessary
import { IUser, IUserIdentity } from '@avans-nx-expedition/shared/api';
import { IExpedition } from '@avans-nx-expedition/shared/api';

@Component({
    selector: 'avans-nx-expedition-expedition-details',
    templateUrl: './expedition-details.component.html',
    styleUrls: ['./expedition-details.component.css']
})
export class ExpeditionDetailsComponent implements OnInit {
    expeditionId: string | null = null;
    expedition: IExpedition | undefined;
    loggedUserId: string = '';
    loggedUser: IUser | null = null;
    isOrganiser: boolean = false;
    sub: Subscription = new Subscription();

    constructor(
        private route: ActivatedRoute,
        private expeditionService: ExpeditionService,
        private accountService: AccountService,
        private cdRef: ChangeDetectorRef
    ) {}

    isUserParticipant(expedition: any, loggedUserId: string): boolean {
        return (
            expedition?.participants?.some(
                (user: IUser) => user._id === loggedUserId
            ) || false
        );
    }

    ngOnInit(): void {
        console.log('ExpeditionDetailsComponent.ngOnInit() aangeroepen');
        this.expeditionId = this.route.snapshot.paramMap.get('id');
        console.log('Expedition ID:', this.expeditionId);
        this.expeditionService
            .getExpeditionByIdApi(String(this.expeditionId))
            .subscribe((expedition) => {
                this.expedition = expedition;
                console.log('Expedition:', this.expedition);

                this.accountService.checkToken().subscribe((isLoggedIn) => {
                    if (isLoggedIn) {
                        console.log('User is logged in');
                    } else {
                        console.log('User is not logged in');
                    }
                });
                this.checkIfUserIsOrganiser();
            });
    }

    checkIfUserIsOrganiser(): void {
        this.accountService
            .getLoggedInUserId()
            .subscribe((id: string | null) => {
                if (id) {
                    this.loggedUserId = id;
                    console.log('Logged User:', this.loggedUserId);

                    // Only check isOrganiser if we already have the expedition
                    if (this.expedition) {
                        if (
                            typeof this.expedition.organizer === 'object' &&
                            this.expedition.organizer !== null
                        ) {
                            this.isOrganiser =
                                this.expedition.organizer._id ===
                                this.loggedUserId;
                        } else {
                            this.isOrganiser =
                                this.expedition.organizer === this.loggedUserId;
                        }
                    }
                } else {
                    console.log('No logged-in user found.');
                }
            });
    }

    joinExpedition(): void {
        if (this.expedition && this.loggedUserId) {
            this.expeditionService
                .joinExpedition(this.expedition._id, this.loggedUserId)
                .subscribe((expedition) => {
                    console.log('Joined expedition:', expedition);
                    this.expedition = expedition as IExpedition;
                });
        }
    }

    leaveExpedition(): void {
        if (this.expedition && this.loggedUserId) {
            this.expeditionService
                .leaveExpedition(this.expedition._id, this.loggedUserId)
                .subscribe((expedition) => {
                    console.log(expedition);
                    console.log('Left expedition:', expedition);
                    this.expedition = expedition as IExpedition;
                });
        }
    }

    getParticipantName(participant: IUser | string): string {
        if (typeof participant === 'string') {
            return 'Unknown user'; // or 'Loading...'
        }
        return participant.name;
    }
}
