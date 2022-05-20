import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../shared/services/authentication.service';
import { DemandeService } from './../../../shared/services/demande.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-demande-connected',
  templateUrl: './ajout-demande-connected.component.html',
  styleUrls: ['./ajout-demande-connected.component.css'],
})
export class AjoutDemandeConnectedComponent implements OnInit {
  constructor(
    private router: Router,
    private DemandeService: DemandeService,
    private authService: AuthenticationService
  ) {}
  oneUser: any = [];
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      demande_name_societe: new FormControl(''),
    });
    this.getUser();
  }
  getUser() {
    this.authService.getConnectedUser().subscribe((res) => {
      this.oneUser = res;
    });
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    if (!this.oneUser) {
      this.getUser();
    }

    let data = {
      matriculeFiscalSociete: this.oneUser.matriculeFiscale,
      nameSociete: this.form.value.demande_name_societe,
      type: 0,
      state: 0,
      dateCreated: new Date(),
    };

    this.DemandeService.saveDemande(data).subscribe((res) => {
      this.router.navigateByUrl('/admin/demande/client');
    });
  }
}
