import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['../auth/auth.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    user: User;

    constructor(
        private alertify: AlertifyService,
        private router: Router,
        private fb: FormBuilder,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.createRegisterForm();
    }

    createRegisterForm() {
        this.registerForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    register() {
        this.user = Object.assign({}, this.registerForm.value);
        this.authService.register(this.user).subscribe(() => {
            this.alertify.success(`Welcome ${this.registerForm.value.username.toUpperCase()}`);
        }, error => {
            this.alertify.error(error);
        }, () => {
            this.authService.login(this.user).subscribe(() => {
                this.router.navigate(['/home']);
            });
        });
    }


}
