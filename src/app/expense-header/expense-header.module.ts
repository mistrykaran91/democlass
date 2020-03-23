import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';
import { ExpenseHeaderPageRoutingModule } from './expense-header-routing.module';
import { ExpenseHeaderPage } from './expense-header.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    ExpenseHeaderPageRoutingModule
  ],
  declarations: [ExpenseHeaderPage]
})
export class ExpenseHeaderPageModule {}
