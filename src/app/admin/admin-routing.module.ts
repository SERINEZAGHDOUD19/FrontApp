import { AjoutDemandeConnectedComponent } from './demande/ajout-demande-connected/ajout-demande-connected.component';
import { ClientDemandeComponent } from './demande/client-demande/client-demande.component';
import { SoldeComponent } from './enquette/solde/solde.component';
import { ProfileComponent } from './profile/profile.component';
import { TraiterEnquetteComponent } from './demande/traiter-enquette/traiter-enquette.component';
import { EmployeDemandeComponent } from './demande/employe-demande/employe-demande.component';
import { ModifierUserComponent } from './users/modifier-user/modifier-user.component';
import { ListEnquetteComponent } from './enquette/list-enquette/list-enquette.component';
import { AjoutUserComponent } from './users/ajout-user/ajout-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { EnvoyerDemandeComponent } from './demande/envoyer-demande/envoyer-demande.component';
import { AjoutDemandeComponent } from './demande/ajout-demande/ajout-demande.component';
import { ListDemandeComponent } from './demande/list-demande/list-demande.component';
import { EditComponent } from './clients/edit/edit.component';
import { TableComponent } from './clients/table/table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './clients/add/add.component';

const routes: Routes = [
  { path: 'clients/add', component: AddComponent },
  { path: 'clients', component: TableComponent },
  { path: 'clients/edit/:ID', component: EditComponent },
  //demande
  { path: 'demande', component: ListDemandeComponent },
  { path: 'demande/add', component: AjoutDemandeComponent },
  { path: 'demande/client/add', component: AjoutDemandeConnectedComponent },
  { path: 'demande/envoyer/:ID', component: EnvoyerDemandeComponent },
  { path: 'demande/employe', component: EmployeDemandeComponent },
  { path: 'demande/client', component: ClientDemandeComponent },
  { path: 'demande/employe/traiter/:ID', component: TraiterEnquetteComponent },

  //users
  { path: 'users', component: ListUsersComponent },
  { path: 'users/add', component: AjoutUserComponent },
  { path: 'users/edit/:ID', component: ModifierUserComponent },
  //enquette
  { path: 'enquette', component: ListEnquetteComponent },
  { path: 'enquette/solde', component: SoldeComponent },

  //profile
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
