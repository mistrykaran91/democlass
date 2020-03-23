import * as fromUserProfile from './user-profile.reducer';
import * as fromSubject from './subject.reducer';
import * as fromCourse from './course.reducer';
import * as fromUniversity from './university.reducer';
import * as fromLeadSource from './lead-source.reducer';
import * as fromExpenseHeader from './expense-header.reducer';

export interface AppState {
  userProfile: fromUserProfile.UserProfileState;
  subject: fromSubject.SubjectState;
  course: fromCourse.CourseState;
  university: fromUniversity.UniversityState;
  leadSource: fromLeadSource.LeadSourceState;
  expenseHeader: fromExpenseHeader.ExpenseHeaderState;
}

export const reducer = {
  userProfile: fromUserProfile.userProfileReducer,
  subject: fromSubject.subjectReducer,
  course: fromCourse.courseReducer,
  university: fromUniversity.universityReducer,
  leadSource: fromLeadSource.leadSourceReducer,
  expenseHeader: fromExpenseHeader.expenseHeaderReducer
};
