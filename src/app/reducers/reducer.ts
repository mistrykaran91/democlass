import * as fromUserProfile from './index';
import { UserProfile } from '../interfaces/user-profile.interface';

export interface AppState {
  userProfile: fromUserProfile.UserProfileState;
}

export const reducer = {
  userProfile: fromUserProfile.reducer
};
