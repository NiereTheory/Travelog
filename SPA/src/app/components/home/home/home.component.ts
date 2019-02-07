import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TravelService } from 'src/app/services/travel.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    userId: number;
    user: {};

    constructor(
        private alertify: AlertifyService,
        private travelService: TravelService
    ) { }

    ngOnInit() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.userId = +user.id;
        this.loadMyTravels(this.userId);
    }

    loadMyTravels(id: number) {
        this.travelService.getMyTravels(id).subscribe((res) => {
            this.user = res;
        }, error => {
            this.alertify.error(error);
        });
    }

}
