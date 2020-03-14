import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces/user-profile.interface';

export const loadUserProfile = createAction('[User Profile] Load User Profile');

export const loadUserProfileSuccess = createAction(
  '[User Profile] Load User Profile Success',
  props<{ userProfile: UserProfile }>()
);

export const loadUserProfileFailure = createAction(
  '[User Profile] Load User Profile Failure',
  props<{ error: any }>()
);

export const updateUserProfile = createAction(
  '[User Profile] Update User Profile',
  props<{ userProfile: UserProfile }>()
);

export const updateUserProfileSuccess = createAction(
  '[User Profile] Update User Profile Success',
  props<{
    userProfile: UserProfile;
  }>()
);

export const updateUserProfileFailure = createAction(
  '[User Profile] Update User Profile Failure',
  props<{ error: any }>()
);
