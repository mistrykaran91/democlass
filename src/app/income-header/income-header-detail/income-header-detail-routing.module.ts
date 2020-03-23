import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeHeaderDetailPage } from './income-header-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeHeaderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeHeaderDetailPageRoutingModule {}
