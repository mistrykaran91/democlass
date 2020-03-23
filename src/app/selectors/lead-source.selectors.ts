import { createSelector, createFeatureSelector } from '@ngrx/store';
import { leadSourceFeatureKey, LeadSourceState } from '@app/reducers';

export const leadSourceFeature = createFeatureSelector<LeadSourceState>(
  leadSourceFeatureKey
);

export const getLeadSources = createSelector(
  leadSourceFeature,
  state => state && state.leadSources
);

export const getCurrentLeadSource = createSelector(
  leadSourceFeature,
  state => state && state.currentLeadSource
);

export const getLeadSource = createSelector(
  getLeadSources,
  (leadSources, props) => {
    const { leadSourceId } = props;
    return leadSources.find(r => r.id === +leadSourceId);
  }
);

export const getIsLeadSourceEmpty = createSelector(
  getLeadSources,
  leadSources => leadSources && leadSources.length === 0
);

export const getLeadSourceGenId = createSelector(getLeadSources, leadSources => {
  return !leadSources || leadSources.length === 0 ? 11 : leadSources.length + 5;
});
