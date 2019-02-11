import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RouterModule } from '@angular/router';
import { appRoutes, routingComponents } from './routes';
import { AuthComponent } from './components/auth/auth/auth.component';
import { AlertifyService } from './services/alertify.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search/search.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { TravelService } from './services/travel.service';
import { TravelogEntryComponent } from './components/shared/travelog-entry/travelog-entry.component';
import { MyTravelogComponent } from './components/travelog/my-travelog/my-travelog.component';
import { AddEntryComponent } from './components/travelog/add-entry/add-entry.component';
import { TravelogComponent } from './components/travelog/travelog/travelog.component';
import { FilterSearchComponent } from './components/search/filter-search/filter-search.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        routingComponents,
        FilterSearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => localStorage.getItem('token'),
                whitelistedDomains: ['localhost:5000'],
                blacklistedRoutes: ['localhost:5000/api/authenticate']
            }
        })
    ],
    providers: [
        AlertifyService,
        AuthService,
        TravelService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
