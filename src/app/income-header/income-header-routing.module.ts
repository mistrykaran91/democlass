import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeHeaderPage } from './income-header.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeHeaderPage
  },
  {
    path: ':incomeHeaderId',
    loadChildren: () =>
      import('./income-header-detail/income-header-detail.module').then(
        m => m.IncomeHeaderDetailPageModule
      ),
    pathMatch: 'full'
  },
  {
    path: ':incomeHeaderId/edit',
    loadChildren: () =>
      import('./income-header-edit/income-header-edit.module').then(
        m => m.IncomeHeaderEditPageModule
      ),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeHeaderPageRoutingModule {}
