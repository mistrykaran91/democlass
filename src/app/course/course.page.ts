import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as Actions from '../actions/course.actions';
import * as Reducers from '../reducers';
import * as Selectors from '../selectors/index';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';
import { View } from '../enums/view.enum';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss']
})
export class CoursePage {
  courses$: Observable<Course[]> = this.store.select(Selectors.getCourses);
  currentCourse$: Observable<Course> = this.store.select(
    Selectors.getCurrentCourse
  );

  currentView$: Observable<View> = this.store.select(Selectors.getCurrentView);
  View = View;

  constructor(
    private store: Store<Reducers.CourseState>,
    private navController: NavController,
    private router: Router
  ) {}

  ngOnInit(): void {
    debugger;
    this.store.dispatch(Actions.loadCourses());
  }

  onCourseSelected(course: Course) {
    debugger;
    this.store.dispatch(Actions.setCurrentCourse({ course }));
    this.store.dispatch(Actions.setCurrentView({ view: View.Detail }));
    this.navController.navigateForward(`/course/detail`);
    this.router.navigate([]);
  }

  onBack() {
    this.store.dispatch(Actions.setCurrentView({ view: View.List }));
    this.navController.navigateBack(`/course/detail`);
  }
}
