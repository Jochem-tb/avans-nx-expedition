import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'avans-nx-expedition-register',
    templateUrl: './register.component.html',
    styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {
    sub: Subscription = new Subscription();

    constructor() {}

    ngOnInit(): void {
        console.log('RegisterComponent.ngOnInit() aangeroepen');
        // this.sub.add(
        //     this.userService.getUsersAsyncApi().subscribe(
        //         (users) => {
        //             this.users = users;
        //             console.log('Users loaded:', users);
        //         },
        //         (error) => {
        //             console.error('Error loading users:', error);
        //         }
        //     )
        // );
    }

    ngOnDestroy(): void {
        if (this.sub) {
            console.log('Unsubscribing from user service');
            this.sub.unsubscribe();
        }
    }
}
