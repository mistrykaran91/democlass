import { createSelector, createFeatureSelector } from '@ngrx/store';
import { courseFeatureKey, CourseState } from '../reducers/course.reducer';

export const courseFeature = createFeatureSelector<CourseState>(
  courseFeatureKey
);

export const getCourses = createSelector(courseFeature, state => state.courses);

export const getCurrentCourse = createSelector(
  courseFeature,
  state => state.currentCourse
);

export const getCurrentView = createSelector(
  courseFeature,
  state => state.currentView
);
