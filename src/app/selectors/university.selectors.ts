import { createSelector, createFeatureSelector } from '@ngrx/store';
import { universityFeatureKey, UniversityState } from '@app/reducers';

export const universityFeature = createFeatureSelector<UniversityState>(
  universityFeatureKey
);

export const getUniversities = createSelector(
  universityFeature,
  state => state && state.universities
);

export const getCurrentUniversity = createSelector(
  universityFeature,
  state => state && state.currentUniversity
);

export const getUniversity = createSelector(
  getUniversities,
  (universities, props) => {
    const { universityId } = props;
    return universities.find(r => r.id === +universityId);
  }
);

export const getIsUniversityEmpty = createSelector(
  getUniversities,
  universities => universities && universities.length === 0
);

export const getGenId = createSelector(
  getUniversities,
  universities => {
    return !universities || universities.length === 0
      ? 11
      : universities.length + 5;
  }
);
