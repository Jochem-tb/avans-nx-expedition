import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { use } from 'passport';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Users
import { UserService } from './users/user.service';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

//Expeditions
import { ExpeditionService } from './expeditions/expedition.service';
// import { UserDetailsComponent } from './users/user-details/user-details.component';
import { ExpeditionListComponent } from './expeditions/expedition-list/expedition-list.component';
// import { UserEditComponent } from './users/user-edit/user-edit.component';

@NgModule({
    imports: [CommonModule, RouterModule, HttpClientModule],
    declarations: [
        UserDetailsComponent,
        UserListComponent,
        UserEditComponent,

        ExpeditionListComponent
    ],
    exports: [UserDetailsComponent, UserListComponent, UserEditComponent],
    providers: [UserService, ExpeditionService]
})
export class FeaturesModule {}
