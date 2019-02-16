import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { Country } from '../models/Country';
import { Travel } from '../models/Travel';
import { BehaviorSubject } from 'rxjs';
import { TravelogEntity } from '../models/TravelogEntity';

@Injectable({
    providedIn: 'root'
})
export class TravelService {
    baseUrl = environment.apiUrl;
    private travels$ = new BehaviorSubject<TravelogEntity>(null);
    travels = this.travels$.asObservable();

    constructor(
        private http: HttpClient
    ) { }

    setSharedTravelArray(inTravels: TravelogEntity, title: string) {
        inTravels.title = title;
        inTravels.totalItems = inTravels.travelog.length;
        this.travels$.next(inTravels);
    }

    addNewTravel(travel: any) {
        return this.http.post(`${this.baseUrl}travelogs`, travel);
    }

    getCountries() {
        return this.http.get<Country[]>(`${this.baseUrl}countries`);
    }

    searchAllTravels(searchParams) {
        let params = new HttpParams();
        if (searchParams.countryId) {
            params = params.append('countryId', searchParams.countryId);
        }
        if (searchParams.orderBy) {
            params = params.append('orderBy', searchParams.orderBy);
        }
        if (searchParams.userId) {
            params = params.append('userId', searchParams.userId);
        }
        return this.http.get<TravelogEntity>(`${this.baseUrl}travelogs`, { params });
    }

    deleteOneTravel(travelId: number) {
        return this.http.delete(`${this.baseUrl}travelogs/${travelId}`);
    }
}
