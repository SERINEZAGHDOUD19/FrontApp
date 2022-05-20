import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../shared/services/authentication.service';
import { DemandeService } from './../../../shared/services/demande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employe-demande',
  templateUrl: './employe-demande.component.html',
  styleUrls: ['./employe-demande.component.css'],
})
export class EmployeDemandeComponent implements OnInit {
  constructor(
    private demandeService: DemandeService,
    private router: Router,
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
          (item) => item.employee?.userName == user.userName
        );
      });
    });
  }
  Traite(id: any) {
    this.router.navigateByUrl('/admin/demande/employe/traiter/' + id);
  }
}
