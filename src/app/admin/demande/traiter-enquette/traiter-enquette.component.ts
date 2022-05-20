import { EnquetteService } from './../../../shared/services/enquette.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../../../shared/services/authentication.service';

@Component({
  selector: 'app-traiter-enquette',
  templateUrl: './traiter-enquette.component.html',
  styleUrls: ['./traiter-enquette.component.css'],
})
export class TraiterEnquetteComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private enquetteService: EnquetteService
  ) {}
  form: FormGroup;
  client: any = [];
  id: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['ID'];
    this.form = new FormGroup({
      pathRapport: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    let data = this.form.value;

    this.enquetteService
      .effectuerUneEnquete(this.id, this.form.value.pathRapport)
      .subscribe((res) => {
        this.router.navigateByUrl('/admin/demande');
      });
  }
}
