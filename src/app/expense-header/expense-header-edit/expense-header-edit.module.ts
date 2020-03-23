import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { ExpenseHeaderEditPageRoutingModule } from './expense-header-edit-routing.module';
import { ExpenseHeaderEditPage } from './expense-header-edit.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    ExpenseHeaderEditPageRoutingModule
  ],
  declarations: [ExpenseHeaderEditPage]
})
export class ExpenseHeaderEditPageModule {}
