import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    IUser,
    UserExperienceLevel,
    UserGender,
    UserRole,
    UserSkills
} from '@avans-nx-expedition/shared/api';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AccountModule,
    AccountService
} from '@avans-nx-expedition/frontend/account';

@Component({
    selector: 'avans-nx-expedition-user-edit',
    templateUrl: './user-edit.component.html',
    styles: []
})
export class UserEditComponent implements OnInit, OnDestroy {
    userId: string | null = null;
    user: IUser | undefined;
    experienceLevels = Object.values(UserExperienceLevel);
    userRoles = Object.values(UserRole);
    userGenders = Object.values(UserGender);
    availableSkills = Object.values(UserSkills);
    sub: Subscription = new Subscription();

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.userId = params.get('id');
            this.userService
                .getUserById(String(this.userId))
                .subscribe((user) => {
                    this.user = user;
                });
        });

        //check if logged in user is expedition organiser
        this.accountService.getLoggedInUserId().subscribe((userId) => {
            if (this.user) {
                if (this.user._id === userId) {
                    console.log('User is the logged in user.');
                } else {
                    this.router.navigate(['/users']);
                    console.error('User is not the logged in user.');
                    return;
                }
            }
        });
    }

    saveUser(): void {
        if (this.userId) {
            if (this.user) {
                this.userService.updateUser(this.user).subscribe(
                    (updatedUser) => {
                        console.log('User saved successfully', updatedUser);
                        this.router.navigate(['/users']);
                        // Handle success (e.g., navigate back, show success message)
                    },
                    (error) => {
                        console.error('Error saving user', error);
                        // Handle error (e.g., show error message)
                    }
                );
            }
        }
    }

    onSkillChange(event: Event, skill: UserSkills): void {
        console.log('Skill changed', skill);
        const checkbox = event.target as HTMLInputElement;
        if (checkbox.checked) {
            if (!this.user!.skills.includes(skill)) {
                this.user!.skills.push(skill);
            }
        } else {
            const index = this.user!.skills.indexOf(skill);
            if (index !== -1) {
                this.user!.skills.splice(index, 1);
            }
        }
    }

    ngOnDestroy(): void {
        if (this.sub) {
            console.log('Unsubscribing from user service');
            this.sub.unsubscribe();
        }
    }
}
