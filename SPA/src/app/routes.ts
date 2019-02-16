import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { SearchComponent } from './components/search/search/search.component';
import { AuthGuard } from './guards/auth.guard';
import { AddEntryComponent } from './components/search/add-entry/add-entry.component';
import { TravelogEntryComponent } from './components/search/travelog-entry/travelog-entry.component';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add', component: AddEntryComponent },
    { path: 'search', component: SearchComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const routingComponents = [
    LoginComponent,
    RegisterComponent,
    AddEntryComponent,
    SearchComponent,
    TravelogEntryComponent
];
