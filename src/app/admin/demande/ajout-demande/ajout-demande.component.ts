import { AuthenticationService } from './../../../shared/services/authentication.service';
import { DemandeService } from './../../../shared/services/demande.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajout-demande',
  templateUrl: './ajout-demande.component.html',
  styleUrls: ['./ajout-demande.component.css'],
})
export class AjoutDemandeComponent implements OnInit {
  form: FormGroup;
  Demande: any[] = [];
  clients: any = [];
  oneUser: any = [];
  selectedValue = null;
  selectedClient = null;

  constructor(
    private router: Router,
    private DemandeService: DemandeService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      demande_type: new FormControl('', [Validators.required]),
      client: new FormControl('', [Validators.required]),
      demande_name_societe: new FormControl(''),
    });
    this.authService.getUsersByType('CLIENT').subscribe((res) => {
      this.clients = res;
      console.log(res);
    });
  }
  get f() {
    return this.form.controls;
  }
  changeCustomer(e: any) {
    this.getUser();
  }
  getUser() {
    this.authService.getUser(this.form.value.client).subscribe((res) => {
      this.oneUser = res;
    });
  }
  submit() {
    if (!this.oneUser) {
      this.getUser();
    }

    let data = {
      matriculeFiscalSociete: this.oneUser.matriculeFiscale,
      nameSociete: this.form.value.demande_name_societe,
      type: this.form.value.demande_type,
      state: 0,
      dateCreated: new Date(),
    };

    this.DemandeService.saveDemande(data).subscribe((res) => {
      this.router.navigateByUrl('/admin/demande');
    });
  }
}
