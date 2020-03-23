import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseHeaderPage } from './expense-header.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseHeaderPage
  },
  {
    path: ':expenseHeaderId',
    loadChildren: () =>
      import('./expense-header-detail/expense-header-detail.module').then(
        m => m.ExpenseHeaderDetailPageModule
      ),
    pathMatch: 'full'
  },
  {
    path: ':expenseHeaderId/edit',
    loadChildren: () =>
      import('./expense-header-edit/expense-header-edit.module').then(
        m => m.ExpenseHeaderEditPageModule
      ),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseHeaderPageRoutingModule {}
