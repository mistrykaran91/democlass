import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversityDetailPage } from './university-detail.page';

const routes: Routes = [
  {
    path: '',
    component: UniversityDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityDetailPageRoutingModule {}
