import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser, IUserInfo } from '@avans-nx-expedition/shared/api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'avans-nx-expedition-user-list',
    templateUrl: './user-list.component.html',
    styles: []
})
export class UserListComponent implements OnInit, OnDestroy {
    users: IUser[] | undefined = undefined;
    sub: Subscription = new Subscription();

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        console.log('UserListComponent.ngOnInit() aangeroepen');
        this.sub.add(
            this.userService.getUsersAsyncApi().subscribe(
                (users) => {
                    this.users = users;
                    console.log('Users loaded:', users);
                },
                (error) => {
                    console.error('Error loading users:', error);
                }
            )
        );
    }

    ngOnDestroy(): void {
        if (this.sub) {
            console.log('Unsubscribing from user service');
            this.sub.unsubscribe();
        }
    }
}
