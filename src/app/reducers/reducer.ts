import * as Reducers from '@app/reducers';

export interface AppState {
  userProfile: Reducers.UserProfileState;
  subject: Reducers.SubjectState;
  course: Reducers.CourseState;
  university: Reducers.UniversityState;
  leadSource: Reducers.LeadSourceState;
  expenseHeader: Reducers.ExpenseHeaderState;
  incomeHeader: Reducers.IncomeHeaderState;
}

export const reducer = {
  userProfile: Reducers.userProfileReducer,
  subject: Reducers.subjectReducer,
  course: Reducers.courseReducer,
  university: Reducers.universityReducer,
  leadSource: Reducers.leadSourceReducer,
  expenseHeader: Reducers.expenseHeaderReducer,
  incomeHeader: Reducers.incomeHeaderReducer
};
