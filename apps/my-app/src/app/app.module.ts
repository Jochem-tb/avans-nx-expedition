import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { FeaturesModule } from '../../../../libs/frontend/features/src';
import { AccountModule } from '../../../../libs/frontend/account/src';
// import { UserService } from '@avans-nx-expedition/backend/user';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabledBlocking'
        }),
        FeaturesModule,
        AccountModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        DashboardComponent,
        AboutComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class AppModule {}
