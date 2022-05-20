import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  constructor(private router: Router) {}
  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
