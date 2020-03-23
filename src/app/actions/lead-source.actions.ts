import { createAction, props } from '@ngrx/store';
import { LeadSource } from '@interfaces/lead-source.interface';

export const loadLeadSource = createAction('[Lead Source] Load Lead Source');

export const loadLeadSourceSuccess = createAction(
  '[Lead Source] Load Lead Source Success',
  props<{ leadSources: Array<LeadSource> }>()
);

export const loadLeadSourceFailure = createAction(
  '[Lead Source] Load Lead Source Failure',
  props<{ error: any }>()
);

export const loadLeadSourceById = createAction(
  '[Lead Source] Load Lead Source By Id',
  props<{ leadSourceId: number }>()
);

export const loadLeadSourceByIdSuccess = createAction(
  '[Lead Source] Load Lead Source Success By Id',
  props<{ leadSource: LeadSource }>()
);

export const loadLeadSourceByIdFailure = createAction(
  '[Lead Source] Load Lead Source Failure By Id',
  props<{ error: any }>()
);

export const setCurrentLeadSource = createAction(
  '[Lead Source] Set Current Lead Source',
  props<{ leadSource: LeadSource }>()
);

export const createLeadSource = createAction(
  '[Lead Source] Create Lead Source',
  props<{ leadSource: LeadSource }>()
);

export const createLeadSourceSuccess = createAction(
  '[Lead Source] Create Lead Source Success',
  props<{ leadSource: LeadSource }>()
);

export const createLeadSourceFailure = createAction(
  '[Lead Source] Create Lead Source Failure',
  props<{ error: any }>()
);

export const updateLeadSource = createAction(
  '[Lead Source] Update Lead Source',
  props<{ leadSource: LeadSource }>()
);

export const updateLeadSourceSuccess = createAction(
  '[Lead Source] Update Lead Source Success',
  props<{ leadSource: LeadSource }>()
);

export const updateLeadSourceFailure = createAction(
  '[Lead Source] Update Lead Source Failure',
  props<{ error: any }>()
);

export const showLeadSourceDeleteConfirmation = createAction(
  '[Lead Source] Show Lead Source Delete Confirmation',
  props<{ leadSource: LeadSource }>()
);

export const deleteLeadSource = createAction(
  '[Lead Source] Delete Lead Source',
  props<{ leadSourceId: number }>()
);

export const deleteLeadSourceRevert = createAction(
  '[Lead Source] Delete Lead Source Revert'
);

export const deleteLeadSourceSuccess = createAction(
  '[Lead Source] Delete Lead Source Success',
  props<{ leadSourceId: number }>()
);

export const deleteLeadSourceFailure = createAction(
  '[Lead Source] Delete Lead Source Failure',
  props<{ error: any }>()
);
