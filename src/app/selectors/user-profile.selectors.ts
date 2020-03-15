import { createSelector, createFeatureSelector } from '@ngrx/store';
import { userProfileFeatureKey, UserProfileState } from '../reducers/user-profile.reducer';

export const userProfileFeature = createFeatureSelector<UserProfileState>(
  userProfileFeatureKey
);

export const getUserProfile = createSelector(
  userProfileFeature,
  state => state.userProfile
);

export const getUserProfileTitle = createSelector(
  getUserProfile,
  userProfile => `${userProfile.firstName} ${userProfile.lastName}`
);
