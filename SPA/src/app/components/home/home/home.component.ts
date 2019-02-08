import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TravelService } from 'src/app/services/travel.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    userId: number;
    user: {};
    travelForm: FormGroup;
    travel: {};

    constructor(
        private alertify: AlertifyService,
        private travelService: TravelService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.createTravelForm();
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

    createTravelForm() {
        this.travelForm = this.fb.group({
            travelDate: ['', Validators.required],
            travelCity: ['', Validators.required],
            rating: ['', Validators.required],
            comments: ['', Validators.required],
            countryId: ['', Validators.required]
        });
    }

    addTravelEntry() {
        this.travel = Object.assign({}, this.travelForm.value);
        this.travelService.addNewTravel(this.userId, this.travel).subscribe(() => {
            // this.router.navigate(['/travelog']);
            // apped to array of travels
            this.alertify.success('WORKED');
        }, error => {
            this.alertify.error(error);
        });
    }

}
