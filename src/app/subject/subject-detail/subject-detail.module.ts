import { SubjectDetailPage } from './subject-detail.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SubjectDetailPageRoutingModule } from './subject-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectDetailPageRoutingModule
  ],
  declarations: [SubjectDetailPage]
})
export class SubjectDetailPageModule {}
