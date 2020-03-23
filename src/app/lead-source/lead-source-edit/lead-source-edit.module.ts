import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { LeadSourceEditPageRoutingModule } from './lead-source-edit-routing.module';
import { LeadSourceEditPage } from './lead-source-edit.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    LeadSourceEditPageRoutingModule
  ],
  declarations: [LeadSourceEditPage]
})
export class LeadSourceEditPageModule {}
