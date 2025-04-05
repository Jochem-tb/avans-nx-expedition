import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '../../../../../../../libs/frontend/account/src/lib/account.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'avans-nx-expedition-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    constructor(private accountService: AccountService) {
        console.log('HeaderComponent constructor aanroepen');
    }

    public loggedIn: boolean = false;
    private loginSub: Subscription | undefined;

    ngOnInit(): void {
        this.loginSub = this.accountService
            .checkToken()
            .subscribe((isLoggedIn) => {
                this.loggedIn = isLoggedIn;
                console.log('HeaderComponent ngOnInit aanroepen');
            });
    }

    logout(): void {
        this.accountService.logout().subscribe();
        console.log('User logged out');
    }

    ngOnDestroy(): void {
        if (this.loginSub) {
            this.loginSub.unsubscribe();
        }
    }
}
