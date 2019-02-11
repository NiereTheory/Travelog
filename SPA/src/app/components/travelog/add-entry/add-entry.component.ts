import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TravelService } from 'src/app/services/travel.service';
import { User } from 'src/app/models/User';
import { Country } from 'src/app/models/Country';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-entry',
    templateUrl: './add-entry.component.html',
    styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

    user: User;
    travelForm: FormGroup;
    countries: Country[];

    constructor(
        private alertify: AlertifyService,
        private travelService: TravelService,
        private fb: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.createTravelForm();
        this.getCountries();
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    getCountries() {
        this.travelService.getCountries().subscribe((res) => {
            this.countries = res;
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
        const newTravel = Object.assign({}, this.travelForm.value);
        newTravel.userId = this.user.id;
        this.travelService.addNewTravel(newTravel).subscribe(() => {
            this.alertify.success('Travelog entry added');
            this.router.navigate(['/search']);
        }, error => {
            this.alertify.error(error);
        });
    }

}
