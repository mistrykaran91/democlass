import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ExpenseHeaderDetailPageRoutingModule } from './expense-header-detail-routing.module';
import { ExpenseHeaderDetailPage } from './expense-header-detail.page';

@NgModule({
  imports: [CommonModule, IonicModule, ExpenseHeaderDetailPageRoutingModule],
  declarations: [ExpenseHeaderDetailPage]
})
export class ExpenseHeaderDetailPageModule {}
