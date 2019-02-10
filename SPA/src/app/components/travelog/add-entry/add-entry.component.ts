import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TravelService } from 'src/app/services/travel.service';
import { User } from 'src/app/models/User';

@Component({
    selector: 'app-add-entry',
    templateUrl: './add-entry.component.html',
    styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

    user: User;
    travelForm: FormGroup;
    newTravel: {};

    constructor(
        private alertify: AlertifyService,
        private travelService: TravelService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.createTravelForm();
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log('Add Entry Component');
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
        this.newTravel = Object.assign({}, this.travelForm.value);
        this.travelService.addNewTravel(this.user.id, this.newTravel).subscribe(() => {
            // this.router.navigate(['/travelog']);
            // apped to array of travels
            this.alertify.success('WORKED');
        }, error => {
            this.alertify.error(error);
        });
    }

}
