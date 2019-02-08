import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseUrl = environment.apiUrl + 'auth/';
    jwtHelper = new JwtHelperService();
    decodedToken: any;

    constructor(
        private http: HttpClient
    ) { }

    register(user: any) {
        return this.http.post(`${this.baseUrl}register`, user);
    }

    login(user: any, enteredUsername: string) {
        return this.http.post(`${this.baseUrl}login`, user)
            .pipe(
                map((response: any) => {
                    const res = response;
                    if (res) {
                        localStorage.setItem('token', res.token);
                        localStorage.setItem('user', JSON.stringify(res.user));
                        localStorage.setItem('name', enteredUsername);
                        this.decodedToken = this.jwtHelper.decodeToken(res.token);
                    }
                })
            );
    }

    loggedIn() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }

}
