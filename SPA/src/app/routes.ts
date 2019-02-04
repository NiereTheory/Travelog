import { HomeComponent } from './components/home/home/home.component';
import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'auth',
        children: [
            { path: 'register', component: RegisterComponent },
            { path: 'login', component: LoginComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
