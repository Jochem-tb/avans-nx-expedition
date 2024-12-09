import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'avans-nx-expedition-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent {
    loginForm: FormGroup;
    formErrors: string[] = [];

    constructor(private fb: FormBuilder) {
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
            console.log('Form Submitted', this.loginForm.value);
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
