import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewSubjectPageRoutingModule } from './new-subject-routing.module';

import { NewSubjectPage } from './new-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewSubjectPageRoutingModule
  ],
  declarations: [NewSubjectPage]
})
export class NewSubjectPageModule {}
