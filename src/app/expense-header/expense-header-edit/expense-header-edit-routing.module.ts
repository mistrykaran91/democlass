import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseHeaderEditPage } from './expense-header-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseHeaderEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseHeaderEditPageRoutingModule {}
