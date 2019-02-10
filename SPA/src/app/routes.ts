import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { SearchComponent } from './components/search/search/search.component';
import { AuthGuard } from './guards/auth.guard';
import { TravelogComponent } from './components/travelog/travelog/travelog.component';
import { MyTravelogComponent } from './components/travelog/my-travelog/my-travelog.component';
import { AddEntryComponent } from './components/travelog/add-entry/add-entry.component';
import { TravelogEntryComponent } from './components/shared/travelog-entry/travelog-entry.component';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'travelog', component: TravelogComponent, children: [
            { path: 'add', component: AddEntryComponent },
            { path: 'list', component: MyTravelogComponent }
        ]
    },
    { path: 'search', component: SearchComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const routingComponents = [
    LoginComponent,
    RegisterComponent,
    MyTravelogComponent,
    TravelogComponent,
    AddEntryComponent,
    SearchComponent,
    TravelogEntryComponent
];
