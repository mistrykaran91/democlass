import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversityPage } from './university.page';

const routes: Routes = [
  {
    path: '',
    component: UniversityPage
  },
  {
    path: ':universityId',
    loadChildren: () =>
      import('./university-detail/university-detail.module').then(
        m => m.UniversityDetailPageModule
      ),
    pathMatch: 'full'
  },
  {
    path: ':universityId/edit',
    loadChildren: () =>
      import('./university-edit/university-edit.module').then(
        m => m.UniversityEditPageModule
      ),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityPageRoutingModule {}
