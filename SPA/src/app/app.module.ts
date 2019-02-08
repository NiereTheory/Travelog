import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthComponent } from './components/auth/auth/auth.component';
import { AlertifyService } from './services/alertify.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search/search.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { TravelService } from './services/travel.service';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        RegisterComponent,
        LoginComponent,
        HomeComponent,
        AuthComponent,
        SearchComponent
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
