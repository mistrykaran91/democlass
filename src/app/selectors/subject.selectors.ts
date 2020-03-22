import { createSelector, createFeatureSelector } from '@ngrx/store';
import { subjectFeatureKey, SubjectState } from '@app/reducers';

export const subjectFeature = createFeatureSelector<SubjectState>(
  subjectFeatureKey
);

export const getSubjects = createSelector(
  subjectFeature,
  state => state && state.subjects
);

export const getCurrentSubject = createSelector(
  subjectFeature,
  state => state && state.currentSubject
);

export const getSubject = createSelector(getSubjects, (subjects, props) => {
  const { subjectId } = props;
  return subjects.find(r => r.id === +subjectId);
});

export const getIsSubjectEmpty = createSelector(
  getSubjects,
  subjects => subjects && subjects.length === 0
);
