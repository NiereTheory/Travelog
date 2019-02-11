import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { Country } from '../models/Country';
import { Travel } from '../models/Travel';

@Injectable({
    providedIn: 'root'
})
export class TravelService {
    baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) { }

    getMyTravels(id: number) {
        return this.http.get<User>(`${this.baseUrl}travelers/${id}`);
    }

    addNewTravel(travel: any) {
        console.log(travel);
        return this.http.post(`${this.baseUrl}travelogs`, travel);
    }

    getCountries() {
        return this.http.get<Country[]>(`${this.baseUrl}countries`);
    }

    searchAllTravels(searchParams) {
        let params = new HttpParams();
        params = params.append('countryId', searchParams.countryId);
        params = params.append('orderBy', searchParams.orderBy);
        return this.http.get<Travel[]>(`${this.baseUrl}travelogs`, { params });
    }
}
