import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TravelService {
    baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) { }

    getMyTravels(id: number) {
        return this.http.get(`${this.baseUrl}travelers/${id}`);
    }

    addNewTravel(id: number, travel: any) {
        return this.http.post(`${this.baseUrl}travelers/${id}/travelog`, travel);
    }
}
