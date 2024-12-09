import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'avans-nx-expedition-register',
    templateUrl: './register.component.html',
    styles: []
})
export class RegisterComponent implements OnInit {
    registerForm!: FormGroup;
    genders = [
        { id: 1, name: 'Male' },
        { id: 2, name: 'Female' },
        { id: 3, name: 'Other' }
    ];
    foodOptions = [
        { id: 1, name: 'Vegetarian' },
        { id: 2, name: 'Vegan' },
        { id: 3, name: 'Gluten-Free' }
    ];
    formErrors: string[] = [];

    sub: Subscription = new Subscription();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm() {
        this.registerForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            genderId: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            street: ['', Validators.required],
            houseNr: ['', Validators.required],
            postalCode: ['', Validators.required],
            city: ['', Validators.required],
            foodOptions: this.fb.array(
                this.foodOptions.map(() => this.fb.control(false))
            )
        });
    }

    get foodOptionsControls(): FormArray {
        return this.registerForm.get('foodOptions') as FormArray;
    }

    onSubmit() {
        this.formErrors = [];

        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            this.collectErrors();
            return;
        }

        const formValue = this.registerForm.value;

        // Construct the data object to send
        const selectedFoodOptions = this.foodOptions
            .filter((_, index) => formValue.foodOptions[index])
            .map((option) => option.id);

        const data = {
            ...formValue,
            foodOptions: selectedFoodOptions
        };

        console.log('Form Submitted', data);
        // Handle form submission (e.g., send to backend API)
    }

    collectErrors() {
        const controls = this.registerForm.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                const controlErrors = controls[name].errors;
                if (controlErrors?.['required']) {
                    this.formErrors.push(`${name} is required.`);
                }
                if (controlErrors?.['email']) {
                    this.formErrors.push(`Invalid email format.`);
                }
                if (controlErrors?.['minlength']) {
                    this.formErrors.push(
                        `${name} must be at least ${controlErrors?.['minlength'].requiredLength} characters.`
                    );
                }
            }
        }
    }
}
