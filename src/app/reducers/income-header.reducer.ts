import { createReducer, on } from '@ngrx/store';
import * as IncomeHeaderActions from '@app/actions';
import { IncomeHeader } from '@interfaces/income-header.interface';
import { Status } from '@enums/status.enum';

export const incomeHeaderFeatureKey = 'incomeHeader';

const initializeIncomeHeader: IncomeHeader = {
  id: 0,
  name: null,
  displayOrder: null,
  status: Status.Active
};

export interface IncomeHeaderState {
  incomeHeaders: Array<IncomeHeader>;
  currentIncomeHeader: IncomeHeader;
}

export const IncomeHeaderState: IncomeHeaderState = {
  incomeHeaders: null,
  currentIncomeHeader: null
};

const _incomeHeaderReducer = createReducer(
  IncomeHeaderState,
  on(IncomeHeaderActions.loadIncomeHeader, state => state),
  on(IncomeHeaderActions.loadIncomeHeaderSuccess, (state, action) => {
    debugger;
    return {
      ...state,
      incomeHeaders: [...action.incomeHeaders]
    };
  }),
  on(IncomeHeaderActions.loadIncomeHeaderById, state => state),
  on(IncomeHeaderActions.loadIncomeHeaderByIdSuccess, (state, action) => {
    return {
      ...state,
      currentIncomeHeader:
        action && action.incomeHeader
          ? action.incomeHeader
          : initializeIncomeHeader
    };
  }),

  on(IncomeHeaderActions.setCurrentIncomeHeader, (state, action) => {
    return {
      ...state,
      currentIncomeHeader:
        action && action.incomeHeader
          ? action.incomeHeader
          : initializeIncomeHeader
    };
  }),

  on(IncomeHeaderActions.loadIncomeHeaderFailure, state => state),
  on(IncomeHeaderActions.createIncomeHeader, state => state),
  on(IncomeHeaderActions.createIncomeHeaderSuccess, (state, action) => {
    return {
      ...state,
      incomeHeaders: state.incomeHeaders
        ? [...state.incomeHeaders, action.incomeHeader]
        : [action.incomeHeader]
    };
  }),
  on(IncomeHeaderActions.createIncomeHeaderFailure, state => state),
  on(IncomeHeaderActions.updateIncomeHeader, state => state),
  on(IncomeHeaderActions.updateIncomeHeaderSuccess, (state, action) => {
    const updatedIncomeHeaders = state.incomeHeaders.map(item =>
      action.incomeHeader.id === item.id ? action.incomeHeader : item
    );

    return { ...state, incomeHeaders: updatedIncomeHeaders };
  }),
  on(IncomeHeaderActions.updateIncomeHeaderFailure, state => state),
  on(IncomeHeaderActions.deleteIncomeHeader, state => state),
  on(IncomeHeaderActions.deleteIncomeHeaderSuccess, (state, action) => {
    return {
      ...state,
      incomeHeaders: state.incomeHeaders.filter(
        item => item.id !== action.incomeHeaderId
      )
    };
  }),
  on(IncomeHeaderActions.deleteIncomeHeaderFailure, state => state)
);

export function incomeHeaderReducer(state, action) {
  return _incomeHeaderReducer(state, action);
}
