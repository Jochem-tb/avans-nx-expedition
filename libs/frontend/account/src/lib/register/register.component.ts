import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {
    UserExperienceLevel,
    UserGender,
    UserRole,
    UserSkills
} from '@avans-nx-expedition/shared/api';
import { AccountService } from '../account.service';

@Component({
    selector: 'avans-nx-expedition-register',
    templateUrl: './register.component.html',
    styles: []
})
export class RegisterComponent implements OnInit {
    registerForm!: FormGroup;
    genders = Object.values(UserGender);
    experienceLevel = Object.values(UserExperienceLevel);
    userSkills = Object.values(UserSkills);
    selectedSkills: UserSkills[] = [];
    formErrors: string[] = [];

    sub: Subscription = new Subscription();

    constructor(
        private fb: FormBuilder,
        private accountService: AccountService
    ) {}

    ngOnInit(): void {
        console.debug('RegisterComponent initialized');
        console.log(this.userSkills);
        this.initializeForm();
    }

    initializeForm() {
        this.registerForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            gender: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            experienceLevel: ['', Validators.required]
        });
    }

    onSkillChange(skill: UserSkills, event: Event) {
        console.log('Skill changed', skill);
        const checkbox = event.target as HTMLInputElement; // Type assertion
        if (checkbox.checked) {
            this.selectedSkills.push(skill);
        } else {
            const index = this.selectedSkills.indexOf(skill);
            if (index > -1) {
                this.selectedSkills.splice(index, 1);
            }
        }
    }

    onSubmit() {
        console.log('onSubmit', this.registerForm.value);
        this.formErrors = [];

        // If you want to validate the form before submitting
        // if (this.registerForm.invalid) {
        //     this.registerForm.markAllAsTouched();
        //     this.collectErrors();
        //     return;
        // }

        const formValue = this.registerForm.value;

        // Map form values to the required structure
        const hashedPassword = formValue.password; // You may want to hash the password before sending it to the backend

        const data = {
            name: formValue.firstName + ' ' + formValue.lastName, // You may want to handle the confirm password field separately
            dateOfBirth: formValue.dateOfBirth, // If there is a field for date of birth, handle it here
            emailAddress: formValue.email,
            profileImgUrl:
                'https://cdn-icons-png.flaticon.com/512/219/219969.png', // Mapping email to the 'email' field
            experienceLevel: formValue.experienceLevel || 'Unknown', // Default to "Unknown" if no experience level is provided
            firstName: formValue.firstName, // Mapping first name
            gender: formValue.gender || '', // Mapping gender, default to an empty string if not provided
            lastName: formValue.lastName, // Mapping last name
            password: hashedPassword, // Mapping password
            phoneNumber: formValue.phoneNumber, // Mapping phone number
            skills: this.selectedSkills || [] // Use selected skills array
        };

        // Call the register method of the account service
        this.accountService.register(data).subscribe(
            (response) => {
                console.log('User registered successfully:', response);
            },
            (error) => {
                console.error('Error during registration:', error);
            }
        );

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
