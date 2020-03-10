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
      )
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./new-subject/new-subject.module').then(
        m => m.NewSubjectPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectPageRoutingModule {}
