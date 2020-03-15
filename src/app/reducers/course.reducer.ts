import { createReducer, on } from '@ngrx/store';
import * as CourseActions from '../actions/course.actions';
import { Course } from '../models/course.model';
import { View } from '../enums/view.enum';

export const courseFeatureKey = 'course';

const initializeCourse: Course = {
  id: 0,
  name: '',
  code: '',
  fees: null,
  subjectId: [],
  description: '',
  avatar: null,
  displayName: '',
  duration: {
    month: null,
    year: null
  },
  status: 'Active',
  summary: '',
  tax: null,
  university: '',
  branchId: null
};

export interface CourseState {
  courses: Array<Course>;
  currentCourse: Course;
  currentView: View;
}

export const courseState: CourseState = {
  courses: null,
  currentCourse: initializeCourse,
  currentView: View.List
};

const _courseReducer = createReducer(
  courseState,
  on(CourseActions.loadCourses, state => state),
  on(CourseActions.loadCoursesFailure, state => state),
  on(CourseActions.loadCoursesSuccess, (state, action) => {
    debugger;
    return {
      ...state,
      courses: action.courses
    };
  }),
  on(CourseActions.setCurrentCourse, (state, action) => {
    debugger;
    return {
      ...state,
      currentCourse: action && action.course ? action.course : initializeCourse
    };
  }),
  on(CourseActions.setCurrentView, (state, action) => {
    debugger;
    return {
      ...state,
      currentView: action.view
    };
  })
);

export function courseReducer(state, action) {
  return _courseReducer(state, action);
}
