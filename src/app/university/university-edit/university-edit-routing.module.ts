import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversityEditPage } from './university-edit.page';

const routes: Routes = [
  {
    path: '',
    component: UniversityEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityEditPageRoutingModule {}
