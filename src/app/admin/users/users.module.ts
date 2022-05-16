import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { AjoutUserComponent } from './ajout-user/ajout-user.component';
import { ModifierUserComponent } from './modifier-user/modifier-user.component';


@NgModule({
  declarations: [
    ListUsersComponent,
    AjoutUserComponent,
    ModifierUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
