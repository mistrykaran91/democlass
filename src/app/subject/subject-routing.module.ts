import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectPage } from './subject.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectPage
  },
  {
    path: 'edit/:subjectId',
    loadChildren: () =>
      import('./edit-subject/edit-subject.module').then(
        m => m.EditSubjectPageModule
      ),
    pathMatch: 'full'
  },
  {
    path: ':subjectId',
    loadChildren: () =>
      import('./subject-detail/subject-detail.module').then(
        m => m.SubjectDetailPageModule
      ),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectPageRoutingModule {}
