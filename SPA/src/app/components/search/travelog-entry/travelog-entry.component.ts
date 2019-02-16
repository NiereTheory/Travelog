import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TravelService } from 'src/app/services/travel.service';
import { TravelogEntity } from 'src/app/models/TravelogEntity';

@Component({
    selector: 'app-travelog-entry',
    templateUrl: './travelog-entry.component.html',
    styleUrls: ['./travelog-entry.component.css']
})
export class TravelogEntryComponent implements OnInit {
    // @Input() travel: Travel;
    user: User;
    travels: TravelogEntity;

    constructor(
        private alertify: AlertifyService,
        private travelService: TravelService
    ) { }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.travelService.travels.subscribe(t => this.travels = t);
    }

    deleteEntry(travelId: number) {
        this.travelService.deleteOneTravel(travelId).subscribe(() => {
            const updatedTravelEntity = this.travels;
            updatedTravelEntity.travelog = this.travels.travelog.filter(t => t.id !== travelId);
            this.travelService.setSharedTravelArray(updatedTravelEntity, updatedTravelEntity.title);
            this.alertify.warning('Travelog entry removed');
        }, error => {
            this.alertify.error(error);
        });
    }
    seeUserProfile(userId: number) {
        this.travelService.searchAllTravels({ 'userId': userId, 'orderBy': 'recency' }).subscribe((res) => {
            this.travelService.setSharedTravelArray(res, `${res.travelog[0].user.username}'s travelog`);
        });
    }

}
