import { Component, OnInit, Input } from '@angular/core';
import { Travel } from 'src/app/models/Travel';
import { User } from 'src/app/models/User';

@Component({
    selector: 'app-travelog-entry',
    templateUrl: './travelog-entry.component.html',
    styleUrls: ['./travelog-entry.component.css']
})
export class TravelogEntryComponent implements OnInit {
    @Input() travel: Travel;
    user: User;

    constructor() { }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

}
