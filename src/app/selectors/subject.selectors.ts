import { createSelector, createFeatureSelector } from '@ngrx/store';
import { subjectFeatureKey, SubjectState } from '../reducers/subject.reducer';

export const subjectFeature = createFeatureSelector<SubjectState>(
  subjectFeatureKey
);

export const getSubjects = createSelector(
  subjectFeature,
  state => state.subjects
);

export const getCurrentSubject = createSelector(
  subjectFeature,
  state => state.currentSubject
);
