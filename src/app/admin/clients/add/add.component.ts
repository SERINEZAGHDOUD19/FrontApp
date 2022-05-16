import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  form: FormGroup;
  client: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      cin: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      dateNaissanced: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }
  submit() {
    let data = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      cin: this.form.value.cin,
      city: this.form.value.city,
      dateNaissanced: this.form.value.dateNaissanced,
      email: this.form.value.email,
      dateCreated: new Date(),
    };
/*
    this.DemandeService.saveDemande(data).subscribe((res) => {
      this.router.navigateByUrl('/admin/demande');
    }); */
  }
}
