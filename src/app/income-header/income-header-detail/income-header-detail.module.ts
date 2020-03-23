import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { IncomeHeaderDetailPageRoutingModule } from './income-header-detail-routing.module';
import { IncomeHeaderDetailPage } from './income-header-detail.page';

@NgModule({
  imports: [CommonModule, IonicModule, IncomeHeaderDetailPageRoutingModule],
  declarations: [IncomeHeaderDetailPage]
})
export class IncomeHeaderDetailPageModule {}
