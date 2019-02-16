import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TravelService } from 'src/app/services/travel.service';
import { Country } from 'src/app/models/Country';
import { TravelogEntity } from 'src/app/models/TravelogEntity';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    user: User;
    travels: TravelogEntity;
    countries: Country[];
    showSearch = false;
    constructor(
        private alertify: AlertifyService,
        private travelService: TravelService,
    ) { }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.loadMyTravels(this.user.id);
        this.getCountries();
        this.travelService.travels.subscribe(t => this.travels = t);
    }
    loadMyTravels(userId: number) {
        this.travelService.searchAllTravels({ 'userId': userId, 'orderBy': 'recency' }).subscribe((res) => {
            this.travelService.setSharedTravelArray(res, 'My Travelog');
        });
    }

    getCountries() {
        this.travelService.getCountries().subscribe((res) => {
            this.countries = res;
        });
    }

    showMyTravelog() {
        this.loadMyTravels(this.user.id);
        this.showSearch = false;
    }

    getChildSearchResults(travels: any) {
        this.travels = travels.travelogs;
    }

    toggleSearch() {
        this.showSearch = !this.showSearch;
    }
}
