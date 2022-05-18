import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../../../shared/services/authentication.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  form: FormGroup;
  client: any = [];
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['ID'];
    this.authService.getUser(this.id).subscribe((data) => {
      this.client = data;
      console.log(this.client);
    });
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      cin: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      dateNaissanced: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    let data = this.form.value;
    data['id'] = this.id;

    this.authService.editUser(this.form.value).subscribe((res) => {
      this.authService
        .addUserToGroupe(this.form.value.userName, 'CLIENT')
        .subscribe((result) => {});
      this.router.navigateByUrl('/admin/clients');
    });
  }
}
