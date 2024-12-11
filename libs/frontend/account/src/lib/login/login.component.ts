import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { IUserCredentials } from '@avans-nx-expedition/shared/api';

@Component({
    selector: 'avans-nx-expedition-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent {
    loginForm: FormGroup;
    formErrors: string[] = [];

    constructor(
        private fb: FormBuilder,
        private accountService: AccountService,
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            rememberMe: [false]
        });
    }

    onSubmit(): void {
        this.formErrors = [];
        if (this.loginForm.invalid) {
            this.collectErrors();
        } else {
            // Handle successful form submission here
            const credentials: IUserCredentials = {
                emailAddress: this.loginForm.value.email,
                password: this.loginForm.value.password
            };

            this.accountService.login(credentials).subscribe(
                (response) => {
                    console.log('User successfully logged in:', response);
                    this.router.navigate(['/']);
                },
                (error) => {
                    console.error('Error during registration:', error);
                    const errorMessage =
                        error.message || 'An unexpected error occurred.';
                    this.formErrors.push(
                        `Something went wrong: ${errorMessage}`
                    );
                }
            );
        }
    }

    private collectErrors(): void {
        const controls = this.loginForm.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                const controlErrors = controls[name].errors;
                if (controlErrors?.['required']) {
                    this.formErrors.push(
                        `${
                            name.charAt(0).toUpperCase() + name.slice(1)
                        } is required.`
                    );
                }
                if (controlErrors?.['email']) {
                    this.formErrors.push('Invalid email format.');
                }
            }
        }
    }
}
