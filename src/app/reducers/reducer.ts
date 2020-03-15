import * as fromUserProfile from './user-profile.reducer';
import * as fromSubject from './subject.reducer';
import * as fromCourse from './course.reducer';

export interface AppState {
  userProfile: fromUserProfile.UserProfileState;
  subject: fromSubject.SubjectState;
  course: fromCourse.CourseState;
}

export const reducer = {
  userProfile: fromUserProfile.userProfileReducer,
  subject: fromSubject.subjectReducer,
  course: fromCourse.courseReducer
};
