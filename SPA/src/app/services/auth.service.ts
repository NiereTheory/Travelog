import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

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

    login(user: any) {
        return this.http.post(`${this.baseUrl}login`, user);
    }
}
