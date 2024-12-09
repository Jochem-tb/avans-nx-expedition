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

        // if (this.registerForm.invalid) {
        //     this.registerForm.markAllAsTouched();
        //     this.collectErrors();
        //     return;
        // }

        const formValue = this.registerForm.value;

        // Construct the data object to send
        const data = {
            ...formValue,
            skills: this.selectedSkills // Use the manually managed array of selected skills
        };

        this.accountService.register(data);
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
