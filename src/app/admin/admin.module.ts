import { AjoutDemandeConnectedComponent } from './demande/ajout-demande-connected/ajout-demande-connected.component';
import { ClientDemandeComponent } from './demande/client-demande/client-demande.component';
import { SoldeComponent } from './enquette/solde/solde.component';
import { ProfileComponent } from './profile/profile.component';
import { TraiterEnquetteComponent } from './demande/traiter-enquette/traiter-enquette.component';
import { EmployeDemandeComponent } from './demande/employe-demande/employe-demande.component';
import { ModifierUserComponent } from './users/modifier-user/modifier-user.component';
import { EditComponent } from './clients/edit/edit.component';
import { ListEnquetteComponent } from './enquette/list-enquette/list-enquette.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { TableComponent } from './clients/table/table.component';
import { EnvoyerDemandeComponent } from './demande/envoyer-demande/envoyer-demande.component';
import { AjoutDemandeComponent } from './demande/ajout-demande/ajout-demande.component';
import { ListDemandeComponent } from './demande/list-demande/list-demande.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddComponent } from './clients/add/add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { AjoutUserComponent } from './users/ajout-user/ajout-user.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@NgModule({
  declarations: [
    AddComponent,
    ListDemandeComponent,
    AjoutDemandeComponent,
    EnvoyerDemandeComponent,
    TableComponent,
    ListUsersComponent,
    AjoutUserComponent,
    ListEnquetteComponent,
    EditComponent,
    ModifierUserComponent,
    EmployeDemandeComponent,
    TraiterEnquetteComponent,
    ProfileComponent,
    SoldeComponent,
    ClientDemandeComponent,
    AjoutDemandeConnectedComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzTableModule,
    NzDropDownModule,
    NzButtonModule,
    NzIconModule,
    NzPageHeaderModule,
    NzModalModule,
    NzInputModule,
    NzFormModule,
    NzSelectModule,
    NzAlertModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzDescriptionsModule,
  ],
})
export class AdminModule {}
