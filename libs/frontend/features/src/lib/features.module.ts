import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material

import { use } from 'passport';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Users
import { UserService } from './users/user.service';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

//Expeditions
import { ExpeditionService } from './expeditions/expedition.service';
import { ExpeditionDetailsComponent } from './expeditions/expedition-details/expedition-details.component';
import { ExpeditionListComponent } from './expeditions/expedition-list/expedition-list.component';
import { ExpeditionEditComponent } from './expeditions/expedition-edit/expedition-edit.component';
import { ExpeditionCreateComponent } from './expeditions/expedition-create/expedition-create.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule,

        //Forms
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        BrowserAnimationsModule
    ],
    declarations: [
        UserDetailsComponent,
        UserListComponent,
        UserEditComponent,

        ExpeditionDetailsComponent,
        ExpeditionListComponent,
        ExpeditionEditComponent,
        ExpeditionCreateComponent
    ],
    exports: [
        UserDetailsComponent,
        UserListComponent,
        UserEditComponent,

        ExpeditionDetailsComponent,
        ExpeditionListComponent,
        ExpeditionEditComponent,
        ExpeditionCreateComponent
    ],
    providers: [UserService, ExpeditionService]
})
export class FeaturesModule {}
