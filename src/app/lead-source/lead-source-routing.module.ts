import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadSourcePage } from './lead-source.page';

const routes: Routes = [
  {
    path: '',
    component: LeadSourcePage
  },
  {
    path: ':leadSourceId',
    loadChildren: () =>
      import('./lead-source-detail/lead-source-detail.module').then(
        m => m.LeadSourceDetailPageModule
      ),
    pathMatch: 'full'
  },
  {
    path: ':leadSourceId/edit',
    loadChildren: () =>
      import('./lead-source-edit/lead-source-edit.module').then(
        m => m.LeadSourceEditPageModule
      ),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadSourcePageRoutingModule {}
