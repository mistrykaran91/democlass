import { createSelector, createFeatureSelector } from '@ngrx/store';
import { incomeHeaderFeatureKey, IncomeHeaderState } from '@app/reducers';

export const incomeHeaderFeature = createFeatureSelector<IncomeHeaderState>(
  incomeHeaderFeatureKey
);

export const getIncomeHeaders = createSelector(
  incomeHeaderFeature,
  state => state && state.incomeHeaders
);

export const getCurrentIncomeHeader = createSelector(
  incomeHeaderFeature,
  state => state && state.currentIncomeHeader
);

export const getIncomeHeader = createSelector(
  getIncomeHeaders,
  (incomeHeaders, props) => {
    const { incomeHeaderId } = props;
    return incomeHeaders.find(r => r.id === +incomeHeaderId);
  }
);

export const getIsIncomeHeaderEmpty = createSelector(
  getIncomeHeaders,
  incomeHeaders => incomeHeaders && incomeHeaders.length === 0
);

export const getIncomeHeaderGenId = createSelector(
  getIncomeHeaders,
  incomeHeaders => {
    return !incomeHeaders || incomeHeaders.length === 0
      ? 11
      : incomeHeaders.length + 5;
  }
);
