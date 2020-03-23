import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { IncomeHeaderEditPageRoutingModule } from './income-header-edit-routing.module';
import { IncomeHeaderEditPage } from './income-header-edit.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    IncomeHeaderEditPageRoutingModule
  ],
  declarations: [IncomeHeaderEditPage]
})
export class IncomeHeaderEditPageModule {}
