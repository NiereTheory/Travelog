import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Travel } from 'src/app/models/Travel';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TravelService } from 'src/app/services/travel.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-travelog',
    templateUrl: './travelog.component.html',
    styleUrls: ['./travelog.component.css']
})
export class TravelogComponent implements OnInit {
    // user: User;
    // travels: Travel[];

    constructor(
        public router: Router
        // private alertify: AlertifyService,
        // private travelService: TravelService,
    ) { }

    ngOnInit() {
        // this.user = JSON.parse(localStorage.getItem('user'));
        // this.loadMyTravels(this.user.id);
        // console.log('Top Travelog Component');
    }

    // loadMyTravels(id: number) {
    //     this.travelService.getMyTravels(id).subscribe((res) => {
    //         this.user = res;
    //         this.travels = this.user.travels;
    //     }, error => {
    //         this.alertify.error(error);
    //     });
    // }

}
