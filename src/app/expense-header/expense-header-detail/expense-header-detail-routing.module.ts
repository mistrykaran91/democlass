import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseHeaderDetailPage } from './expense-header-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseHeaderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseHeaderDetailPageRoutingModule {}
