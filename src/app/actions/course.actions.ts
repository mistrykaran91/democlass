import { createAction, props } from '@ngrx/store';
import { Course } from '../models/course.model';
import { View } from '../enums/view.enum';

export const loadCourses = createAction('[Course] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Array<Course> }>()
);

export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: any }>()
);

export const setCurrentCourse = createAction(
  '[Course] Set Current Course',
  props<{ course: Course }>()
);

export const setCurrentView = createAction(
  '[Course] Set Current View',
  props<{ view: View }>()
);
