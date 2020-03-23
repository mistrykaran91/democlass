import { createReducer, on } from '@ngrx/store';
import * as LeadSourceActions from '@app/actions';
import { LeadSource } from '@interfaces/lead-source.interface';

export const leadSourceFeatureKey = 'leadSource';

const initializeLeadSource: LeadSource = {
  id: 0,
  name: null,
  displayOrder: null,
  status: null
};

export interface LeadSourceState {
  leadSources: Array<LeadSource>;
  currentLeadSource: LeadSource;
}

export const LeadSourceState: LeadSourceState = {
  leadSources: null,
  currentLeadSource: null
};

const _leadSourceReducer = createReducer(
  LeadSourceState,
  on(LeadSourceActions.loadLeadSource, state => state),
  on(LeadSourceActions.loadLeadSourceSuccess, (state, action) => {
    return {
      ...state,
      leadSources: action.leadSources
    };
  }),
  on(LeadSourceActions.loadLeadSourceById, state => state),
  on(LeadSourceActions.loadLeadSourceByIdSuccess, (state, action) => {
    return {
      ...state,
      currentLeadSource:
        action && action.leadSource ? action.leadSource : initializeLeadSource
    };
  }),

  on(LeadSourceActions.setCurrentLeadSource, (state, action) => {
    return {
      ...state,
      currentLeadSource:
        action && action.leadSource ? action.leadSource : initializeLeadSource
    };
  }),

  on(LeadSourceActions.loadLeadSourceFailure, state => state),
  on(LeadSourceActions.createLeadSource, state => state),
  on(LeadSourceActions.createLeadSourceSuccess, (state, action) => {
    return {
      ...state,
      leadSources: state.leadSources
        ? [...state.leadSources, action.leadSource]
        : [action.leadSource]
    };
  }),
  on(LeadSourceActions.createLeadSourceFailure, state => state),
  on(LeadSourceActions.updateLeadSource, state => state),
  on(LeadSourceActions.updateLeadSourceSuccess, (state, action) => {
    const updatedLeadSources = state.leadSources.map(item =>
      action.leadSource.id === item.id ? action.leadSource : item
    );

    return { ...state, leadSources: updatedLeadSources };
  }),
  on(LeadSourceActions.updateLeadSourceFailure, state => state),
  on(LeadSourceActions.deleteLeadSource, state => state),
  on(LeadSourceActions.deleteLeadSourceSuccess, (state, action) => {
    return {
      ...state,
      leadSources: state.leadSources.filter(
        item => item.id !== action.leadSourceId
      )
    };
  }),
  on(LeadSourceActions.deleteLeadSourceFailure, state => state)
);

export function leadSourceReducer(state, action) {
  return _leadSourceReducer(state, action);
}
