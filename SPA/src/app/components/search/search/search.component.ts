import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Travel } from 'src/app/models/Travel';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TravelService } from 'src/app/services/travel.service';
import { Country } from 'src/app/models/Country';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    user: User;
    travels: Travel[];
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
    }
    loadMyTravels(id: number) {
        this.travelService.getMyTravels(id).subscribe((res) => {
            this.user = res;
            this.travels = this.user.travels;
        }, error => {
            this.alertify.error(error);
        });
    }

    getCountries() {
        this.travelService.getCountries().subscribe((res) => {
            this.countries = res;
        });
    }

    showMyTravelog() {
        this.showSearch = false;
        this.travels = this.user.travels;
    }

    showSearchSection() {
        this.showSearch = true;
        this.travels = [];
    }

    getChildSearchResults(travels: any) {
        console.log(travels);
        this.travels = travels.travelogs;
    }
}
