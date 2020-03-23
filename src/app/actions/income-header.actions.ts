import { createAction, props } from '@ngrx/store';
import { IncomeHeader } from '@interfaces/income-header.interface';

export const loadIncomeHeader = createAction(
  '[Income Header] Load Income Header'
);

export const loadIncomeHeaderSuccess = createAction(
  '[Income Header] Load Income Header Success',
  props<{ incomeHeaders: Array<IncomeHeader> }>()
);

export const loadIncomeHeaderFailure = createAction(
  '[Income Header] Load Income Header Failure',
  props<{ error: any }>()
);

export const loadIncomeHeaderById = createAction(
  '[Income Header] Load Income Header By Id',
  props<{ incomeHeaderId: number }>()
);

export const loadIncomeHeaderByIdSuccess = createAction(
  '[Income Header] Load Income Header Success By Id',
  props<{ incomeHeader: IncomeHeader }>()
);

export const loadIncomeHeaderByIdFailure = createAction(
  '[Income Header] Load Income Header Failure By Id',
  props<{ error: any }>()
);

export const setCurrentIncomeHeader = createAction(
  '[Income Header] Set Current Income Header',
  props<{ incomeHeader: IncomeHeader }>()
);

export const createIncomeHeader = createAction(
  '[Income Header] Create Income Header',
  props<{ incomeHeader: IncomeHeader }>()
);

export const createIncomeHeaderSuccess = createAction(
  '[Income Header] Create Income Header Success',
  props<{ incomeHeader: IncomeHeader }>()
);

export const createIncomeHeaderFailure = createAction(
  '[Income Header] Create Income Header Failure',
  props<{ error: any }>()
);

export const updateIncomeHeader = createAction(
  '[Income Header] Update Income Header',
  props<{ incomeHeader: IncomeHeader }>()
);

export const updateIncomeHeaderSuccess = createAction(
  '[Income Header] Update Income Header Success',
  props<{ incomeHeader: IncomeHeader }>()
);

export const updateIncomeHeaderFailure = createAction(
  '[Income Header] Update Income Header Failure',
  props<{ error: any }>()
);

export const showIncomeHeaderDeleteConfirmation = createAction(
  '[Income Header] Show Income Header Delete Confirmation',
  props<{ incomeHeader: IncomeHeader }>()
);

export const deleteIncomeHeader = createAction(
  '[Income Header] Delete Income Header',
  props<{ incomeHeaderId: number }>()
);

export const deleteIncomeHeaderRevert = createAction(
  '[Income Header] Delete Income Header Revert'
);

export const deleteIncomeHeaderSuccess = createAction(
  '[Income Header] Delete Income Header Success',
  props<{ incomeHeaderId: number }>()
);

export const deleteIncomeHeaderFailure = createAction(
  '[Income Header] Delete Income Header Failure',
  props<{ error: any }>()
);
