import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeRoutingModule } from './demande-routing.module';
import { ListDemandeComponent } from './list-demande/list-demande.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AjoutDemandeComponent } from './ajout-demande/ajout-demande.component';
import { EnvoyerDemandeComponent } from './envoyer-demande/envoyer-demande.component';
import { EmployeDemandeComponent } from './employe-demande/employe-demande.component';
import { TraiterEnquetteComponent } from './traiter-enquette/traiter-enquette.component';
import { ClientDemandeComponent } from './client-demande/client-demande.component';
import { AjoutDemandeConnectedComponent } from './ajout-demande-connected/ajout-demande-connected.component';

@NgModule({
  declarations: [
    ListDemandeComponent,
    AjoutDemandeComponent,
    EnvoyerDemandeComponent,
    EmployeDemandeComponent,
    TraiterEnquetteComponent,
    ClientDemandeComponent,
    AjoutDemandeConnectedComponent,
  ],
  imports: [CommonModule, DemandeRoutingModule, NzTableModule],
})
export class DemandeModule {}
