import { Component, OnInit, Input } from '@angular/core';
import { Travel } from 'src/app/models/Travel';
import { User } from 'src/app/models/User';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TravelService } from 'src/app/services/travel.service';

@Component({
    selector: 'app-travelog-entry',
    templateUrl: './travelog-entry.component.html',
    styleUrls: ['./travelog-entry.component.css']
})
export class TravelogEntryComponent implements OnInit {
    @Input() travel: Travel;
    user: User;

    constructor(
        private alertify: AlertifyService,
        private travelService: TravelService
    ) { }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    deleteEntry(travelId: number) {
        console.log(travelId);
        this.travelService.deleteOneTravel(travelId).subscribe(() => {
            this.alertify.message('Travelog entry removed');
            // emit up to parent!!!
        }, error => {
            this.alertify.error(error);
        });
    }
    seeUserProfile(userId: number) {
        console.log(userId);
    }

}
