import { Component, inject } from '@angular/core';
import {
    MatDialogRef,
    MAT_DIALOG_DATA,
    MatDialog
} from '@angular/material/dialog';
import { IExpedition } from '@avans-nx-expedition/shared/api';

@Component({
    selector: 'avans-nx-expedition-expedition-edit',
    templateUrl: './expedition-edit.component.html',
    styleUrls: ['./expedition-edit.component.css']
})
export class ExpeditionEditComponent {
    constructor(
        public dialog: MatDialog,
        public dialogRef: MatDialogRef<ExpeditionEditComponent>
    ) {}

    public expedtion: IExpedition | undefined;

    onSubmit(formValue: any): void {
        console.log('Form Submitted:', formValue);
        this.dialogRef.close(); // Close the dialog after submission
    }

    onCancel(): void {
        console.log('onCancel() called');
    }
}
