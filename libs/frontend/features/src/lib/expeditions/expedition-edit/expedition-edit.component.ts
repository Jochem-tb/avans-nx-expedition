import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpeditionService } from '../expedition.service';
import { Expedition } from '@avans-nx-expedition/backend/expedition';
import { Subscription } from 'rxjs';
import {
    ContinentEnum,
    DifficultyLevel,
    ExpeditionStatus,
    GearStatusEnum,
    IActivity,
    IExpedition,
    IGearItem,
    IUser
} from '@avans-nx-expedition/shared/api';
import { AccountService } from '@avans-nx-expedition/frontend/account';
import { DatePipe } from '@angular/common';
import * as exp from 'constants';

@Component({
    selector: 'avans-nx-expedition-expedition-edit',
    templateUrl: './expedition-edit.component.html',
    styleUrls: ['./expedition-edit.component.css'],
    providers: [DatePipe]
})
export class ExpeditionEditComponent implements OnInit {
    expeditionId: string | null = null;
    expedition: IExpedition | undefined;

    difficultyLevels = Object.values(DifficultyLevel);
    statusus = Object.values(ExpeditionStatus);
    continents = Object.values(ContinentEnum);
    sub: Subscription = new Subscription();

    activities: IActivity[] = []; // Array to hold activities

    newActivity: IActivity = {
        _id: '',
        title: '',
        description: '',
        date: '' as unknown as Date,
        startTime: '14:00', // Default start time
        endTime: '16:00', // Default end time
        location: {
            latitude: 0,
            longitude: 0,
            name: '',
            continent: ContinentEnum.Unknown
        },
        gear: [],
        notes: '', // Additional notes or instructions
        difficultyLevel: DifficultyLevel.Unknown
    };

    newGearItem: IGearItem = {
        _id: '',
        name: '',
        description: '',
        quantity: 1,
        status: GearStatusEnum.ToPack
    };

    gearStatuses = Object.values(GearStatusEnum);

    constructor(
        private route: ActivatedRoute,
        private expeditionService: ExpeditionService,
        private router: Router,
        private datePipe: DatePipe,
        private accountService: AccountService
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

                    //check if logged in user is expedition organiser
                    this.accountService
                        .getLoggedInUserId()
                        .subscribe((userId) => {
                            if (this.expedition) {
                                if (
                                    typeof this.expedition.organizer ===
                                        'object' &&
                                    this.expedition.organizer !== null
                                ) {
                                    var isOrganiser =
                                        this.expedition.organizer._id ===
                                        userId;

                                    if (isOrganiser) {
                                        console.log(
                                            'User is the organizer of this expedition.'
                                        );
                                    } else {
                                        this.router.navigate(['/expeditions']);
                                        console.error(
                                            'User is not the organizer of this expedition.'
                                        );
                                        return;
                                    }
                                } else {
                                    this.router.navigate(['/expeditions']);
                                    console.error(
                                        'User is not the organizer of this expedition.'
                                    );
                                    return;
                                }
                            }
                        });
                });
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getParticipantName(person: string | IUser): string {
        return (person as IUser).name;
    }

    removeParticipant(person: string | IUser): void {
        // Logic to remove the participant
        this.expedition!.participants = this.expedition!.participants.filter(
            (p) => p !== person
        );
        console.log(`${this.getParticipantName(person)} has been removed.`);
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

    addActivity() {
        if (
            this.newActivity.title &&
            this.newActivity.date &&
            this.newActivity.startTime &&
            this.newActivity.endTime
        ) {
            this.activities.push({ ...this.newActivity });
            this.sortActivities(); // Sort activities after adding a new one

            // Reset fields
            this.newActivity = {
                _id: '',
                title: '',
                description: '',
                date: '' as unknown as Date,
                startTime: '14:00', // Default start time
                endTime: '16:00', // Default end time
                location: {
                    latitude: 0,
                    longitude: 0,
                    name: '',
                    continent: ContinentEnum.Unknown
                },
                gear: [],
                notes: '', // Additional notes or instructions
                difficultyLevel: DifficultyLevel.Unknown
            };
        }
    }

    sortActivities() {
        this.activities.sort((a, b) => {
            const dateComparison =
                new Date(a.date).getTime() - new Date(b.date).getTime();
            if (dateComparison !== 0) {
                return dateComparison;
            }
            return a.startTime.localeCompare(b.startTime);
        });
    }

    // For demo, assume you're adding to the current new activity before it's submitted
    addGearItemToNewActivity() {
        if (!this.newActivity.gear) this.newActivity.gear = [];

        const newItem = {
            ...this.newGearItem,
            _id: crypto.randomUUID() // Give it a temporary ID
        };

        this.newActivity.gear.push(newItem);

        // Reset gear item form
        this.newGearItem = {
            _id: '',
            name: '',
            description: '',
            quantity: 1,
            status: GearStatusEnum.ToPack
        };
    }
}
