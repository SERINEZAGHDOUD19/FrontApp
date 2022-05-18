import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../../shared/services/authentication.service';
@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.css'],
})
export class AjoutUserComponent implements OnInit {
  form: FormGroup;
  users: any[] = [];
  selectedValue = null;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      cin: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      dateNaissanced: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
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
      password: this.form.value.password,
      userName: this.form.value.userName,
      dateCreated: new Date(),
    };
    console.log(this.form.value);

    this.authService.saveUser(data).subscribe((res) => {
      this.authService
        .addUserToGroupe(this.form.value.userName, this.form.value.type)
        .subscribe((result) => {});
      this.router.navigateByUrl('/admin/users');
    });
  }
}
