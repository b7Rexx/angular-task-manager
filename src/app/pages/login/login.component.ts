import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  err = null;

  constructor(
    public fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    if (this.form.value.username && this.form.value.password) {
      this.authService
        .attemptAuth(this.form.value.username, this.form.value.password)
        .then(() => {
          this.snackBar.open('Login success.', 'Dismiss', {
            duration: 2000,
          });
          this.router.navigateByUrl('/');
        })
        .catch(() => {
          this.snackBar.open('Login failed.', 'Dismiss', {
            duration: 2000,
          });
        });
    }
  }

  gotoSignup() {
    this.router.navigateByUrl('/signup');
  }
}
