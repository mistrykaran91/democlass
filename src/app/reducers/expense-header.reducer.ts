import { createReducer, on } from '@ngrx/store';
import * as ExpenseHeaderActions from '@app/actions';
import { ExpenseHeader } from '@interfaces/expense-header.interface';
import { Status } from '@enums/status.enum';

export const expenseHeaderFeatureKey = 'expenseHeader';

const initializeExpenseHeader: ExpenseHeader = {
  id: 0,
  name: null,
  displayOrder: null,
  status: Status.Active
};

export interface ExpenseHeaderState {
  expenseHeaders: Array<ExpenseHeader>;
  currentExpenseHeader: ExpenseHeader;
}

export const ExpenseHeaderState: ExpenseHeaderState = {
  expenseHeaders: null,
  currentExpenseHeader: null
};

const _expenseHeaderReducer = createReducer(
  ExpenseHeaderState,
  on(ExpenseHeaderActions.loadExpenseHeader, state => state),
  on(ExpenseHeaderActions.loadExpenseHeaderSuccess, (state, action) => {
    return {
      ...state,
      expenseHeaders: action.expenseHeaders
    };
  }),
  on(ExpenseHeaderActions.loadExpenseHeaderById, state => state),
  on(ExpenseHeaderActions.loadExpenseHeaderByIdSuccess, (state, action) => {
    return {
      ...state,
      currentExpenseHeader:
        action && action.expenseHeader
          ? action.expenseHeader
          : initializeExpenseHeader
    };
  }),

  on(ExpenseHeaderActions.setCurrentExpenseHeader, (state, action) => {
    return {
      ...state,
      currentExpenseHeader:
        action && action.expenseHeader
          ? action.expenseHeader
          : initializeExpenseHeader
    };
  }),

  on(ExpenseHeaderActions.loadExpenseHeaderFailure, state => state),
  on(ExpenseHeaderActions.createExpenseHeader, state => state),
  on(ExpenseHeaderActions.createExpenseHeaderSuccess, (state, action) => {
    return {
      ...state,
      expenseHeaders: state.expenseHeaders
        ? [...state.expenseHeaders, action.expenseHeader]
        : [action.expenseHeader]
    };
  }),
  on(ExpenseHeaderActions.createExpenseHeaderFailure, state => state),
  on(ExpenseHeaderActions.updateExpenseHeader, state => state),
  on(ExpenseHeaderActions.updateExpenseHeaderSuccess, (state, action) => {
    const updatedExpenseHeaders = state.expenseHeaders.map(item =>
      action.expenseHeader.id === item.id ? action.expenseHeader : item
    );

    return { ...state, expenseHeaders: updatedExpenseHeaders };
  }),
  on(ExpenseHeaderActions.updateExpenseHeaderFailure, state => state),
  on(ExpenseHeaderActions.deleteExpenseHeader, state => state),
  on(ExpenseHeaderActions.deleteExpenseHeaderSuccess, (state, action) => {
    return {
      ...state,
      expenseHeaders: state.expenseHeaders.filter(
        item => item.id !== action.expenseHeaderId
      )
    };
  }),
  on(ExpenseHeaderActions.deleteExpenseHeaderFailure, state => state)
);

export function expenseHeaderReducer(state, action) {
  return _expenseHeaderReducer(state, action);
}
