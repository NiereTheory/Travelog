import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { appRoutes, routingComponents } from './routes';
import { AlertifyService } from './services/alertify.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { TravelService } from './services/travel.service';
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
        ButtonsModule.forRoot(),
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
