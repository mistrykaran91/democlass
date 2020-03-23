import { createSelector, createFeatureSelector } from '@ngrx/store';
import { expenseHeaderFeatureKey, ExpenseHeaderState } from '@app/reducers';

export const expenseHeaderFeature = createFeatureSelector<ExpenseHeaderState>(
  expenseHeaderFeatureKey
);

export const getExpenseHeaders = createSelector(
  expenseHeaderFeature,
  state => state && state.expenseHeaders
);

export const getCurrentExpenseHeader = createSelector(
  expenseHeaderFeature,
  state => state && state.currentExpenseHeader
);

export const getExpenseHeader = createSelector(
  getExpenseHeaders,
  (expenseHeaders, props) => {
    const { expenseHeaderId } = props;
    return expenseHeaders.find(r => r.id === +expenseHeaderId);
  }
);

export const getIsExpenseHeaderEmpty = createSelector(
  getExpenseHeaders,
  expenseHeaders => expenseHeaders && expenseHeaders.length === 0
);

export const getExpenseHeaderGenId = createSelector(
  getExpenseHeaders,
  expenseHeaders => {
    return !expenseHeaders || expenseHeaders.length === 0
      ? 11
      : expenseHeaders.length + 5;
  }
);
