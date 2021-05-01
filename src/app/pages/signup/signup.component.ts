import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
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
        .attemptSignup(this.form.value.username, this.form.value.password)
        .then(() => {
          this.snackBar.open('Signup success.', 'Dismiss', {
            duration: 2000,
          });
          this.router.navigateByUrl('/');
        })
        .catch(() => {
          this.snackBar.open('Signup failed.', 'Dismiss', {
            duration: 2000,
          });
        });
    }
  }
}
