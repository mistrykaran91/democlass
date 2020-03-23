import { createSelector, createFeatureSelector } from '@ngrx/store';
import { universityFeatureKey, UniversityState } from '@app/reducers';

export const universityFeature = createFeatureSelector<UniversityState>(
  universityFeatureKey
);

export const getUniversitys = createSelector(
  universityFeature,
  state => state && state.universities
);

export const getCurrentUniversity = createSelector(
  universityFeature,
  state => state && state.currentUniversity
);

export const getUniversity = createSelector(
  getUniversitys,
  (universities, props) => {
    const { universityId } = props;
    return universities.find(r => r.id === +universityId);
  }
);

export const getIsUniversityEmpty = createSelector(
  getUniversitys,
  universities => universities && universities.length === 0
);
