import { createAction, props } from '@ngrx/store';
import { University } from '@interfaces/university.interface';

export const loadUniversity = createAction('[University] Load University');

export const loadUniversitySuccess = createAction(
  '[University] Load University Success',
  props<{ universities: Array<University> }>()
);

export const loadUniversityFailure = createAction(
  '[University] Load University Failure',
  props<{ error: any }>()
);

export const loadUniversityById = createAction(
  '[University] Load University By Id',
  props<{ universityId: number }>()
);

export const loadUniversityByIdSuccess = createAction(
  '[University] Load University Success By Id',
  props<{ university: University }>()
);

export const loadUniversityByIdFailure = createAction(
  '[University] Load University Failure By Id',
  props<{ error: any }>()
);

export const setCurrentUniversity = createAction(
  '[University] Set Current University',
  props<{ university: University }>()
);

export const createUniversity = createAction(
  '[University] Create University',
  props<{ university: University }>()
);

export const createUniversitySuccess = createAction(
  '[University] Create University Success',
  props<{ university: University }>()
);

export const createUniversityFailure = createAction(
  '[University] Create University Failure',
  props<{ error: any }>()
);

export const updateUniversity = createAction(
  '[University] Update University',
  props<{ university: University }>()
);

export const updateUniversitySuccess = createAction(
  '[University] Update University Success',
  props<{ university: University }>()
);

export const updateUniversityFailure = createAction(
  '[University] Update University Failure',
  props<{ error: any }>()
);

export const showUniversityDeleteConfirmation = createAction(
  '[University] Show University Delete Confirmation',
  props<{ university: University }>()
);

export const deleteUniversity = createAction(
  '[University] Delete University',
  props<{ universityId: number }>()
);

export const deleteUniversityRevert = createAction(
  '[University] Delete University Revert'
);

export const deleteUniversitySuccess = createAction(
  '[University] Delete University Success',
  props<{ universityId: number }>()
);

export const deleteUniversityFailure = createAction(
  '[University] Delete University Failure',
  props<{ error: any }>()
);
