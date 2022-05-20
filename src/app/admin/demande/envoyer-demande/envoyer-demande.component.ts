import { AuthenticationService } from './../../../shared/services/authentication.service';
import { DemandeService } from './../../../shared/services/demande.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-envoyer-demande',
  templateUrl: './envoyer-demande.component.html',
  styleUrls: ['./envoyer-demande.component.css'],
})
export class EnvoyerDemandeComponent implements OnInit {
  id: number;
  public demande: any = [];
  public employe: any = [];
  selectedValue = null;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private demandeService: DemandeService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      demande_user_id: new FormControl('', [Validators.required]),
    });

    this.id = this.route.snapshot.params['ID'];
    this.authService.getUsersByType('EMPLOYE').subscribe((res) => {
      this.employe = res;
      console.log(res);
    });

    this.demandeService.getDemande(this.id).subscribe((res) => {
      this.demande = res;
    });
  }

  get f() {
    return this.form.controls;
  }
  submit() {
    let data = {
      idDemande: parseInt(this.demande.id),
      idEmp: this.form.value.demande_user_id,
    };

    this.demandeService
      .EnvoyerDemande(data.idDemande, data.idEmp)
      .subscribe((res) => {
        this.router.navigateByUrl('/admin/demande');
      });
  }
}
