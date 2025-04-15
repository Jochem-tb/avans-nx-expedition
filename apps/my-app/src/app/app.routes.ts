import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';

//Account
import { RegisterComponent } from '../../../../libs/frontend//account/src/lib/register/register.component';
import { LoginComponent } from '../../../../libs/frontend//account/src/lib/login/login.component';

//Users
import { UserListComponent } from '../../../../libs/frontend/features/src/lib/users/user-list/user-list.component';
import { UserDetailsComponent } from '../../../../libs/frontend/features/src/lib/users/user-details/user-details.component';
import { UserEditComponent } from '../../../../libs/frontend/features/src/lib/users/user-edit/user-edit.component';

//Expeditions
import { ExpeditionListComponent } from '../../../../libs/frontend/features/src/lib/expeditions/expedition-list/expedition-list.component';
import { ExpeditionDetailsComponent } from '../../../../libs/frontend/features/src/lib/expeditions/expedition-details/expedition-details.component';
import { ExpeditionEditComponent } from '../../../../libs/frontend/features/src/lib/expeditions/expedition-edit/expedition-edit.component';
import { ExpeditionCreateComponent } from '../../../../libs/frontend/features/src/lib/expeditions/expedition-create/expedition-create.component';

export const appRoutes: Route[] = [
    // HIer komen onze URL's te staan
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'users', component: UserListComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'users/new', component: UserEditComponent },
    { path: 'users/:id/edit', component: UserEditComponent },

    { path: 'expeditions', component: ExpeditionListComponent },
    { path: 'expeditions/new', component: ExpeditionCreateComponent },
    { path: 'expeditions/:id', component: ExpeditionDetailsComponent },
    { path: 'expeditions/:id/edit', component: ExpeditionEditComponent },

    { path: '**', redirectTo: 'dashboard' }
];
