import { HomeComponent } from './components/home/home/home.component';
import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { SearchComponent } from './components/search/search/search.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'auth/register', component: RegisterComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'travelog', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
