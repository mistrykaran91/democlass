import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';
import { UniversityPageRoutingModule } from './university-routing.module';
import { UniversityPage } from './university.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    UniversityPageRoutingModule
  ],
  declarations: [UniversityPage]
})
export class UniversityPageModule {}
