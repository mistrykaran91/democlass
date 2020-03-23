import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListSkeletonComponent } from '../skeleton/list-skeleton.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [ListSkeletonComponent],
  exports: [ListSkeletonComponent]
})
export class SharedModule {}
