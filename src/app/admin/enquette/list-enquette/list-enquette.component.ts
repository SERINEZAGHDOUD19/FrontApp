import { EnquetteService } from './../../../shared/services/enquette.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-enquette',
  templateUrl: './list-enquette.component.html',
  styleUrls: ['./list-enquette.component.css'],
})
export class ListEnquetteComponent implements OnInit {
  constructor(private enquetteService: EnquetteService) {}
  public listOfData: any = [];

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.enquetteService.getAll().subscribe((dataa) => {
      this.listOfData = dataa;
      console.log(dataa);
    });
  }
  Valider(id: any) {}
  Refuser(id: any) {}
}
