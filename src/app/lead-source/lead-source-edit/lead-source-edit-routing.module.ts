import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadSourceEditPage } from './lead-source-edit.page';

const routes: Routes = [
  {
    path: '',
    component: LeadSourceEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadSourceEditPageRoutingModule {}
