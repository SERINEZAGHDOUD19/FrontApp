import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../shared/services/authentication.service';
import { DemandeService } from './../../../shared/services/demande.service';

@Component({
  selector: 'app-client-demande',
  templateUrl: './client-demande.component.html',
  styleUrls: ['./client-demande.component.css'],
})
export class ClientDemandeComponent implements OnInit {
  constructor(
    private demandeService: DemandeService,
    private authService: AuthenticationService
  ) {}
  public listOfData: any = [];
  public user: any = [];
  public data: any = [];
  role: any = '';

  ngOnInit(): void {
    this.authService.getConnectedUser().subscribe((user: any) => {
      this.user = user;
      this.demandeService.getAll().subscribe((dataa) => {
        this.data = dataa;
        this.listOfData = this.data.filter(
          (item) => item.matriculeFiscalSociete == user.matriculeFiscale
        );
      });
    });
  }
}
