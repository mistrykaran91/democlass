import { createAction, props } from '@ngrx/store';
import { Subject } from '../interfaces/subject.interface';

export const loadSubject = createAction('[Subject] Load Subject');

export const loadSubjectSuccess = createAction(
  '[Subject] Load Subject Success',
  props<{ subjects: Array<Subject> }>()
);

export const loadSubjectFailure = createAction(
  '[Subject] Load Subject Failure',
  props<{ error: any }>()
);

export const loadSubjectById = createAction(
  '[Subject] Load Subject By Id',
  props<{ subjectId: number }>()
);

export const loadSubjectByIdSuccess = createAction(
  '[Subject] Load Subject Success By Id',
  props<{ subject: Subject }>()
);

export const loadSubjectByIdFailure = createAction(
  '[Subject] Load Subject Failure By Id',
  props<{ error: any }>()
);

export const setCurrentSubject = createAction(
  '[Subject] Set Current Subject',
  props<{ subject: Subject }>()
);

export const createSubject = createAction(
  '[Subject] Create Subject',
  props<{ subject: Subject }>()
);

export const createSubjectSuccess = createAction(
  '[Subject] Create Subject Success',
  props<{ subject: Subject }>()
);

export const createSubjectFailure = createAction(
  '[Subject] Create Subject Failure',
  props<{ error: any }>()
);

export const updateSubject = createAction(
  '[Subject] Update Subject',
  props<{ subject: Subject }>()
);

export const updateSubjectSuccess = createAction(
  '[Subject] Update Subject Success',
  props<{ subject: Subject }>()
);

export const updateSubjectFailure = createAction(
  '[Subject] Update Subject Failure',
  props<{ error: any }>()
);

export const showDeleteConfirmation = createAction(
  '[Subject] Show Delete Confirmation',
  props<{ subject: Subject }>()
);

export const deleteSubject = createAction(
  '[Subject] Delete Subject',
  props<{ subjectId: number }>()
);

export const deleteSubjectRevert = createAction(
  '[Subject] Delete Subject Revert'
);

export const deleteSubjectSuccess = createAction(
  '[Subject] Delete Subject Success',
  props<{ subjectId: number }>()
);

export const deleteSubjectFailure = createAction(
  '[Subject] Delete Subject Failure',
  props<{ error: any }>()
);
