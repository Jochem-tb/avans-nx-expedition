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

    currentActivity: IActivity = {
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

    // For toggling between the Activity and Gear input fields on the right:
    activeTab: 'activity' | 'gear' = 'activity';

    // When a user selects an activity from the left list, store its index:
    selectedActivityIndex: number | null = null;

    // --- Gear Item Editing State ---
    // List of gear items for the currentActivity is in currentActivity.gearItems.
    // For editing, create a separate editing object and an index variable:
    currentGearItem: IGearItem = {
        _id: '',
        name: '',
        description: '',
        quantity: 1,
        status: GearStatusEnum.ToPack
    };

    selectedGearIndex: number | null = null;

    // For creating new gear items (when not editing an existing one)
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

    // Called when the user clicks an activity from the left list.
    selectActivity(index: number) {
        // If the clicked activity is already selected, deselect it
        if (this.selectedActivityIndex === index) {
            this.deselectActivity();
        } else {
            // Save the currently selected activity (if any)
            if (this.selectedActivityIndex !== null) {
                this.saveActivity();
            }

            // Select the new activity
            this.selectedActivityIndex = index;
            this.currentActivity = { ...this.activities[index] };
            this.activeTab = 'activity';
        }
    }

    deselectActivity() {
        // Save changes before resetting
        if (this.selectedActivityIndex !== null) {
            this.saveActivity();
        }
        this.resetCurrentActivity(); // This sets selectedActivityIndex = null
    }

    // Save or update the activity from the right side
    saveActivity() {
        if (this.selectedActivityIndex === null) {
            // Adding a new activity
            this.activities.push({ ...this.currentActivity });
        } else {
            // Updating an existing activity
            this.activities[this.selectedActivityIndex] = {
                ...this.currentActivity
            };
        }
        // Reset currentActivity and selection
        this.sortActivities(); // Sort activities after adding a new one
        this.resetCurrentActivity();
    }

    // Reset current activity editing form
    resetCurrentActivity() {
        this.currentActivity = {
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
        this.selectedActivityIndex = null;
        this.activeTab = 'activity';
    }

    // Optionally, a method to cancel editing.
    cancelEdit() {
        this.resetCurrentActivity();
    }

    // --- Methods for Gear Items ---

    // Called when a gear item in the gear list is clicked for editing.
    selectGearItem(index: number) {
        // If the clicked gear item is already selected, then deselect it.
        if (this.selectedGearIndex === index) {
            this.deselectGearItem();
        } else {
            // Save previous gear item if one was selected and it's different.
            if (
                this.selectedGearIndex !== null &&
                this.selectedGearIndex !== index
            ) {
                this.saveGearItem();
            }
            // Select the new gear item for editing:
            this.selectedGearIndex = index;
            // Copy the gear item into currentGearItem for editing.
            this.currentGearItem = { ...this.currentActivity.gear[index] };
        }
    }

    // Save the currently edited gear item back into the currentActivity list.
    saveGearItem() {
        if (this.selectedGearIndex !== null) {
            // Update the gear item in the list.
            this.currentActivity.gear[this.selectedGearIndex] = {
                ...this.currentGearItem
            };
            // Deselect it afterwards.
            this.deselectGearItem();
        }
    }

    // Deselect the gear item and reset the currentGearItem.
    deselectGearItem() {
        this.selectedGearIndex = null;
        // Reset current gear item editor.
        this.currentGearItem = {
            _id: '',
            name: '',
            description: '',
            quantity: 1,
            status: GearStatusEnum.ToPack
        };
    }

    // Add a new gear item (if not editing an existing one)
    addGearItem() {
        // Generate a temporary ID (or use any unique generator)
        this.newGearItem._id = crypto.randomUUID
            ? crypto.randomUUID()
            : Math.random().toString();
        if (!this.currentActivity.gear) {
            this.currentActivity.gear = [];
        }
        // Add the new gear item to the current activity gear list.
        this.currentActivity.gear.push({ ...this.newGearItem });
        // Reset newGearItem for next use.
        this.newGearItem = {
            _id: '',
            name: '',
            description: '',
            quantity: 1,
            status: GearStatusEnum.ToPack
        };
    }
}
