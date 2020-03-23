import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';
import { LeadSourcePageRoutingModule } from './lead-source-routing.module';
import { LeadSourcePage } from './lead-source.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    LeadSourcePageRoutingModule
  ],
  declarations: [LeadSourcePage]
})
export class LeadSourcePageModule {}
