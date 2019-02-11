import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../auth/auth.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    user: User;

    constructor(
        private alertify: AlertifyService,
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.createLoginForm();
    }

    createLoginForm() {
        this.loginForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
    }

    login() {
        this.user = Object.assign({}, this.loginForm.value);
        this.authService.login(this.user).subscribe(() => {
            this.router.navigate(['/search']);
        }, error => {
            this.alertify.error(error);
        });
    }

}
