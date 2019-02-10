import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class TravelService {
    baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) { }

    getMyTravels(id: number) {
        return this.http.get<User>(`${this.baseUrl}travelers/${id}/travelog`);
    }

    addNewTravel(id: number, travel: any) {
        return this.http.post(`${this.baseUrl}travelers/${id}/travelog`, travel);
    }
}
