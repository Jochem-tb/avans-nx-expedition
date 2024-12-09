import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './account.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    declarations: [RegisterComponent, LoginComponent],
    exports: [RegisterComponent, LoginComponent],
    providers: [AccountService]
})
export class AccountModule {}
