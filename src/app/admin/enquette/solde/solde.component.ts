import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../shared/services/authentication.service';
import { EnquetteService } from './../../../shared/services/enquette.service';
@Component({
  selector: 'app-solde',
  templateUrl: './solde.component.html',
  styleUrls: ['./solde.component.css'],
})
export class SoldeComponent implements OnInit {
  constructor(
    private enquetteService: EnquetteService,
    private authService: AuthenticationService,
    private httpClient: HttpClient
  ) {}
  public listOfData: any = [];
  public data: any = [];
  public user: any = [];

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.authService.getConnectedUser().subscribe((user: any) => {
      this.user = user;
      console.log(user.matriculeFiscale);

      this.enquetteService.getAll().subscribe((dataa) => {
        this.data = dataa;
        this.listOfData = this.data.filter(
          (item) =>
            item.demande?.matriculeFiscalSociete == user.matriculeFiscale
        );
        console.log(dataa);
      });
    });
  }

  consulter(path: any) {
  /*   this.httpClient
      .get('assets/enquettes/' + path, { responseType: 'text' })
      .subscribe((data) => console.log(data));
 */
    let link = document.createElement('a');
    link.download = path;
    link.href = 'assets/enquettes/'+path;
    link.click();
  }
}
