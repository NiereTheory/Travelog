import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    constructor(
        private route: Router,
        public authService: AuthService,
        private alertify: AlertifyService
    ) { }

    ngOnInit() {
    }

    loggedIn() {
        const token = localStorage.getItem('token');
        return !!token;
    }

    logout() {
        localStorage.clear();
        this.authService.decodedToken = null;
        this.alertify.success('Safe travels');
        this.route.navigate(['/auth/login']);
    }
}
