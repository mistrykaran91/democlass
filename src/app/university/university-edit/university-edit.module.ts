import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { UniversityEditPageRoutingModule } from './university-edit-routing.module';
import { UniversityEditPage } from './university-edit.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    UniversityEditPageRoutingModule
  ],
  declarations: [UniversityEditPage]
})
export class UniversityEditPageModule {}
