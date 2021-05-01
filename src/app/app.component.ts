import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeRoute;
  isAuth = false;

  constructor(private router: Router, private authService: AuthService) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url;
        this.isAuth = authService.isAuthenticated();
      }
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
