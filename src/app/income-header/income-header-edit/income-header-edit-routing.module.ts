import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeHeaderEditPage } from './income-header-edit.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeHeaderEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeHeaderEditPageRoutingModule {}
