import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { CoursePage } from './course.page';
import { CourseListPage } from './course-list/course-list.page';
import { CourseDetailPage } from './course-detail/course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CoursePage
  },
  {
    path: 'detail',
    component: CoursePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoursePage, CourseListPage, CourseDetailPage]
})
export class CoursePageModule {}
