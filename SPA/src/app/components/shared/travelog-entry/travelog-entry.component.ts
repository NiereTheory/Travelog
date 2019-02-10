import { Component, OnInit, Input } from '@angular/core';
import { Travel } from 'src/app/models/Travel';

@Component({
    selector: 'app-travelog-entry',
    templateUrl: './travelog-entry.component.html',
    styleUrls: ['./travelog-entry.component.css']
})
export class TravelogEntryComponent implements OnInit {
    @Input() travel: Travel;

    constructor() { }

    ngOnInit() {
    }

}
