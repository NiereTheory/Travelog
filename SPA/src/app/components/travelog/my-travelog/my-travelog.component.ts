import { Component, OnInit, Input } from '@angular/core';
import { Travel } from 'src/app/models/Travel';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TravelService } from 'src/app/services/travel.service';
import { User } from 'src/app/models/User';

@Component({
    selector: 'app-my-travelog',
    templateUrl: './my-travelog.component.html',
    styleUrls: ['./my-travelog.component.css']
})
export class MyTravelogComponent implements OnInit {

    user: User;
    travels: Travel[];

    constructor(
        private alertify: AlertifyService,
        private travelService: TravelService,
    ) { }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.loadMyTravels(this.user.id);
        console.log('My Travelog Component');
    }

    loadMyTravels(id: number) {
        this.travelService.getMyTravels(id).subscribe((res) => {
            this.user = res;
            this.travels = this.user.travels;
        }, error => {
            this.alertify.error(error);
        });
    }
}
