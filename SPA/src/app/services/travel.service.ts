import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { Country } from '../models/Country';
import { Travel } from '../models/Travel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TravelService {
    baseUrl = environment.apiUrl;
    private travels$ = new BehaviorSubject<Travel[]>(null);
    travels = this.travels$.asObservable();

    constructor(
        private http: HttpClient
    ) { }

    setSharedTravelArray(inTravels: Travel[]) {
        this.travels$.next(inTravels);
    }

    getMyTravels(id: number) {
        return this.http.get<User>(`${this.baseUrl}travelers/${id}`);
    }

    addNewTravel(travel: any) {
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

    deleteOneTravel(travelId: number) {
        return this.http.delete(`${this.baseUrl}travelogs/${travelId}`);
    }
}
