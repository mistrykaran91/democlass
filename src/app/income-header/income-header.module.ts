import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';
import { IncomeHeaderPageRoutingModule } from './income-header-routing.module';
import { IncomeHeaderPage } from './income-header.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    IncomeHeaderPageRoutingModule
  ],
  declarations: [IncomeHeaderPage]
})
export class IncomeHeaderPageModule {}
