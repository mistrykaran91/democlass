import * as fromUserProfile from './user-profile.reducer';
import * as fromSubject from './subject.reducer';

export interface AppState {
  userProfile: fromUserProfile.UserProfileState;
  subject: fromSubject.SubjectState;
}

export const reducer = {
  userProfile: fromUserProfile.userProfileReducer,
  subject: fromSubject.subjectReducer
};
