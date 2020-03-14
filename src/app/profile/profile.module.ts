import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './profile.page';
import { ProfileSkeletonPage } from './skeleton/profile-skeleton.page';
import { ProfileEditPage } from './profile-edit/profile-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage, ProfileSkeletonPage, ProfileEditPage]
})
export class ProfilePageModule {}
