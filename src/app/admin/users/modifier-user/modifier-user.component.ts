import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../../../shared/services/authentication.service';
@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.css'],
})
export class ModifierUserComponent implements OnInit {
  form: FormGroup;
  users: any;
  selectedValue = null;
  id: number;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['ID'];
    this.authService.getUser(this.id).subscribe((data) => {
      this.users = data;
      this.selectedValue = this.users.groups[0].privileged;
    });

    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      cin: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      dateNaissanced: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
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
        .addUserToGroupe(this.form.value.userName, this.form.value.type)
        .subscribe((result) => {});
      this.router.navigateByUrl('/admin/users');
    });
  }
}
