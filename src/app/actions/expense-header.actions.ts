import { createAction, props } from '@ngrx/store';
import { ExpenseHeader } from '@interfaces/expense-header.interface';

export const loadExpenseHeader = createAction(
  '[Expense Header] Load Expense Header'
);

export const loadExpenseHeaderSuccess = createAction(
  '[Expense Header] Load Expense Header Success',
  props<{ expenseHeaders: Array<ExpenseHeader> }>()
);

export const loadExpenseHeaderFailure = createAction(
  '[Expense Header] Load Expense Header Failure',
  props<{ error: any }>()
);

export const loadExpenseHeaderById = createAction(
  '[Expense Header] Load Expense Header By Id',
  props<{ expenseHeaderId: number }>()
);

export const loadExpenseHeaderByIdSuccess = createAction(
  '[Expense Header] Load Expense Header Success By Id',
  props<{ expenseHeader: ExpenseHeader }>()
);

export const loadExpenseHeaderByIdFailure = createAction(
  '[Expense Header] Load Expense Header Failure By Id',
  props<{ error: any }>()
);

export const setCurrentExpenseHeader = createAction(
  '[Expense Header] Set Current Expense Header',
  props<{ expenseHeader: ExpenseHeader }>()
);

export const createExpenseHeader = createAction(
  '[Expense Header] Create Expense Header',
  props<{ expenseHeader: ExpenseHeader }>()
);

export const createExpenseHeaderSuccess = createAction(
  '[Expense Header] Create Expense Header Success',
  props<{ expenseHeader: ExpenseHeader }>()
);

export const createExpenseHeaderFailure = createAction(
  '[Expense Header] Create Expense Header Failure',
  props<{ error: any }>()
);

export const updateExpenseHeader = createAction(
  '[Expense Header] Update Expense Header',
  props<{ expenseHeader: ExpenseHeader }>()
);

export const updateExpenseHeaderSuccess = createAction(
  '[Expense Header] Update Expense Header Success',
  props<{ expenseHeader: ExpenseHeader }>()
);

export const updateExpenseHeaderFailure = createAction(
  '[Expense Header] Update Expense Header Failure',
  props<{ error: any }>()
);

export const showExpenseHeaderDeleteConfirmation = createAction(
  '[Expense Header] Show Expense Header Delete Confirmation',
  props<{ expenseHeader: ExpenseHeader }>()
);

export const deleteExpenseHeader = createAction(
  '[Expense Header] Delete Expense Header',
  props<{ expenseHeaderId: number }>()
);

export const deleteExpenseHeaderRevert = createAction(
  '[Expense Header] Delete Expense Header Revert'
);

export const deleteExpenseHeaderSuccess = createAction(
  '[Expense Header] Delete Expense Header Success',
  props<{ expenseHeaderId: number }>()
);

export const deleteExpenseHeaderFailure = createAction(
  '[Expense Header] Delete Expense Header Failure',
  props<{ error: any }>()
);
