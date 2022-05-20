import { Router } from '@angular/router';
import { AuthenticationService } from './../../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  public listOfData: any = [];
  role: any = '';
  ngOnInit(): void {
    this.authService.getUsersByType('CLIENT').subscribe((res) => {
      this.listOfData = res;
      console.log(res);
    });
    this.role = this.authService.GetRole();
  }
  edit(id: any) {
    this.router.navigateByUrl('/admin/clients/edit/' + id);
  }

  delete(id: any) {
    this.authService.deleteUser(id).subscribe((res) => {
      console.log(res);

      this.router.navigateByUrl('/admin/clients').then(() => {
        this.ngOnInit();
      });
    });
  }
}
