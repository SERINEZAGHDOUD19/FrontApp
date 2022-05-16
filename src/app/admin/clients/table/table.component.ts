import { AuthenticationService } from './../../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}
  public listOfData: any = [];

  ngOnInit(): void {
    this.authService.getUsersByType('CLIENT').subscribe((res) => {
      this.listOfData = res;
      console.log(res);
    });
  }
  edit(id: any) {}

  delete(id: any) {}
}
