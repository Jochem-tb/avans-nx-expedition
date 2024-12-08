import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './account.service';

@NgModule({
    imports: [CommonModule],
    declarations: [RegisterComponent, LoginComponent],
    exports: [RegisterComponent, LoginComponent],
    providers: [AccountService]
})
export class AccountModule {}
