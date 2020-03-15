import { createReducer, on } from '@ngrx/store';
import { UserProfile } from '../interfaces/user-profile.interface';
import * as Actions from '../actions';

export const userProfileFeatureKey = 'userProfile';

export interface UserProfileState {
  userProfile: UserProfile;
}

const initialState: UserProfileState = {
  userProfile: null
};

const _userProfileReducer = createReducer(
  initialState,
  on(Actions.loadUserProfile, state => state),
  on(Actions.loadUserProfileSuccess, (state, action) => ({  
    ...state,
    userProfile: action.userProfile
  })),
  on(Actions.loadUserProfileFailure, state => state),
  on(Actions.updateUserProfile, state => state),
  on(Actions.updateUserProfileSuccess, (state, action) => ({
    ...state,
    userProfile: action.userProfile
  })),
  on(Actions.updateUserProfileFailure, state => state)
);

export function userProfileReducer(state, action) {
  return _userProfileReducer(state, action);
}
