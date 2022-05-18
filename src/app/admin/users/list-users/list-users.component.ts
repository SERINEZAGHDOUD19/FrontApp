import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../shared/services/authentication.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  public listOfData: any = [];

  ngOnInit(): void {
    this.authService.getUsers().subscribe((res) => {
      this.listOfData = res;
      console.log(res);
    });
  }
  edit(id: any) {
    this.router.navigateByUrl('/admin/users/edit/' + id);
  }

  delete(id: any) {
    this.authService.deleteUser(id).subscribe((res) => {
      console.log(res);

      this.router.navigateByUrl('/admin/users').then(() => {
        this.ngOnInit();
      });
    });
  }
}
