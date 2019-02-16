import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TravelService } from 'src/app/services/travel.service';
import { Travel } from 'src/app/models/Travel';
import { TravelogEntity } from 'src/app/models/TravelogEntity';

@Component({
    selector: 'app-filter-search',
    templateUrl: './filter-search.component.html',
    styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent implements OnInit {

    @Input() countries;
    searchForm: FormGroup;
    orderByVal = 'rating';
    travels: TravelogEntity;
    @Output() searchSubmitted = new EventEmitter<boolean>();
    constructor(
        private fb: FormBuilder,
        private travelService: TravelService
    ) { }

    ngOnInit() {
        this.createSearchForm();
        this.travelService.travels.subscribe(t => this.travels = t);
    }

    createSearchForm() {
        this.searchForm = this.fb.group({
            countryId: ['', Validators.required],
            orderBy: ['', Validators.required]
        });
    }

    submitSearch() {
        const searchCriteria = Object.assign({}, this.searchForm.value);
        this.travelService.searchAllTravels(searchCriteria).subscribe((res) => {
            this.travelService.setSharedTravelArray(res, `${res.travelog[0].country.shortName} Search results`);
            this.searchSubmitted.emit(true);
        });
    }
}
