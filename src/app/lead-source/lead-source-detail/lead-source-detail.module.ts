import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LeadSourceDetailPageRoutingModule } from './lead-source-detail-routing.module';
import { LeadSourceDetailPage } from './lead-source-detail.page';

@NgModule({
  imports: [CommonModule, IonicModule, LeadSourceDetailPageRoutingModule],
  declarations: [LeadSourceDetailPage]
})
export class LeadSourceDetailPageModule {}
