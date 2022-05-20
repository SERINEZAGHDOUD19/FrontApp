import { AuthenticationService } from './../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}
  public user: any = [];

  ngOnInit(): void {
    this.authService.getConnectedUser().subscribe((user: any) => {
      this.user = user;
      console.log(user);

    });
  }
}
