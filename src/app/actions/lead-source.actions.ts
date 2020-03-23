import { createAction, props } from '@ngrx/store';
import { LeadSource } from '@interfaces/lead-source.interface';

export const loadLeadSource = createAction('[LeadSource] Load LeadSource');

export const loadLeadSourceSuccess = createAction(
  '[LeadSource] Load LeadSource Success',
  props<{ leadSources: Array<LeadSource> }>()
);

export const loadLeadSourceFailure = createAction(
  '[LeadSource] Load LeadSource Failure',
  props<{ error: any }>()
);

export const loadLeadSourceById = createAction(
  '[LeadSource] Load LeadSource By Id',
  props<{ leadSourceId: number }>()
);

export const loadLeadSourceByIdSuccess = createAction(
  '[LeadSource] Load LeadSource Success By Id',
  props<{ leadSource: LeadSource }>()
);

export const loadLeadSourceByIdFailure = createAction(
  '[LeadSource] Load LeadSource Failure By Id',
  props<{ error: any }>()
);

export const setCurrentLeadSource = createAction(
  '[LeadSource] Set Current LeadSource',
  props<{ leadSource: LeadSource }>()
);

export const createLeadSource = createAction(
  '[LeadSource] Create LeadSource',
  props<{ leadSource: LeadSource }>()
);

export const createLeadSourceSuccess = createAction(
  '[LeadSource] Create LeadSource Success',
  props<{ leadSource: LeadSource }>()
);

export const createLeadSourceFailure = createAction(
  '[LeadSource] Create LeadSource Failure',
  props<{ error: any }>()
);

export const updateLeadSource = createAction(
  '[LeadSource] Update LeadSource',
  props<{ leadSource: LeadSource }>()
);

export const updateLeadSourceSuccess = createAction(
  '[LeadSource] Update LeadSource Success',
  props<{ leadSource: LeadSource }>()
);

export const updateLeadSourceFailure = createAction(
  '[LeadSource] Update LeadSource Failure',
  props<{ error: any }>()
);

export const showLeadSourceDeleteConfirmation = createAction(
  '[LeadSource] Show LeadSource Delete Confirmation',
  props<{ leadSource: LeadSource }>()
);

export const deleteLeadSource = createAction(
  '[LeadSource] Delete LeadSource',
  props<{ leadSourceId: number }>()
);

export const deleteLeadSourceRevert = createAction(
  '[LeadSource] Delete LeadSource Revert'
);

export const deleteLeadSourceSuccess = createAction(
  '[LeadSource] Delete LeadSource Success',
  props<{ leadSourceId: number }>()
);

export const deleteLeadSourceFailure = createAction(
  '[LeadSource] Delete LeadSource Failure',
  props<{ error: any }>()
);
