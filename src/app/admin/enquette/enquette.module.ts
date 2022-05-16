import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquetteRoutingModule } from './enquette-routing.module';
import { ListEnquetteComponent } from './list-enquette/list-enquette.component';

@NgModule({
  declarations: [ListEnquetteComponent],
  imports: [CommonModule, EnquetteRoutingModule],
})
export class EnquetteModule {}
