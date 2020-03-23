import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'assignment',
    loadChildren: () =>
      import('./assignment/assignment.module').then(
        m => m.AssignmentPageModule
      ),
    canLoad: [AuthGuard]
  },
  {
    path: 'attendance',
    loadChildren: () =>
      import('./attendance/attendance.module').then(
        m => m.AttendancePageModule
      ),
    canLoad: [AuthGuard]
  },
  {
    path: 'billing',
    loadChildren: () =>
      import('./billing/billing.module').then(m => m.BillingPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./course/course.module').then(m => m.CoursePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'subject',
    loadChildren: () =>
      import('./subject/subject.module').then(m => m.SubjectPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'examination',
    loadChildren: () =>
      import('./examination/examination.module').then(
        m => m.ExaminationPageModule
      ),
    canLoad: [AuthGuard]
  },
  {
    path: 'notification',
    loadChildren: () =>
      import('./notification/notification.module').then(
        m => m.NotificationPageModule
      ),
    canLoad: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then(m => m.ProfilePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./schedule/schedule.module').then(m => m.SchedulePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'university',
    loadChildren: () =>
      import('./university/university.module').then(
        m => m.UniversityPageModule
      ),
    canLoad: [AuthGuard]
  },
  {
    path: 'leadSource',
    loadChildren: () =>
      import('./lead-source/lead-source.module').then(
        m => m.LeadSourcePageModule
      ),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
