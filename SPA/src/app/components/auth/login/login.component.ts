import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../auth/auth.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    user: any;

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
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    login() {
        this.user = Object.assign({}, this.loginForm.value);
        this.authService.login(this.user).subscribe(() => {
            this.alertify.success(`Welcome back ${this.loginForm.value.username}`);
            // save token
            this.router.navigate(['/home']);
        }, error => {
            this.alertify.error(error);
        });
    }

}
