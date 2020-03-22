import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as Actions from '../actions/course.actions';
import * as Reducers from '../reducers';
import * as Selectors from '../selectors/index';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';
import { View } from '../enums/view.enum';
import { Router } from '@angular/router';

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
    private store: Store<Reducers.CourseState>
  ) {}

  ngOnInit(): void {
    
  }

  onCourseSelected(course: Course) {
    
  }

  onEditCourse(course: Course) {}

  onDeleteCourse(course: Course) {}

  onBack(event:any) {}
}
