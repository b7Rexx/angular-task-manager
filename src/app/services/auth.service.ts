import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;
  users = [
    { username: 'test', password: 'test' },
    { username: 'admin', password: 'admin' },
  ];

  constructor() {}

  attemptAuth(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.users.some((user) => {
        if (user.username === username && user.password === password) {
          this.isAuth = true;
          resolve(true);
          return true;
        }
      });
      reject();
    });
  }

  attemptSignup(username: string, password: string) {
    return new Promise((resolve) => {
      this.users.push({
        username,
        password,
      });
      this.isAuth = true;
      resolve(true);
    });
  }

  logout() {
    return new Promise((resolve) => {
      this.isAuth = false;
      resolve(true);
    });
  }

  isAuthenticated() {
    return this.isAuth;
  }
}
