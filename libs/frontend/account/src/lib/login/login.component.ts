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
export class LoginComponent implements OnInit {
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

    ngOnInit(): void {
        if (this.accountService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    }

    onSubmit(): void {
        this.formErrors = [];
        if (this.loginForm.invalid) {
            this.collectErrors();
        } else {
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
                    console.error('Error during login:', error);

                    // Extract error message from backend response
                    let errorMessage = 'An unexpected error occurred.';
                    if (error.error) {
                        // Check if error.error contains a message
                        if (typeof error.error === 'string') {
                            errorMessage = error.error; // Plain text error
                        } else if (error.error.message) {
                            errorMessage = error.error.message; // JSON error message
                        }
                    }

                    this.formErrors.push(
                        errorMessage || 'An unexpected error occurred.'
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
