import { Subject } from '@interfaces/subject.interface';
import { createReducer, on } from '@ngrx/store';
import * as SubjectActions from '@app/actions';

export const subjectFeatureKey = 'subject';

const initializeSubject: Subject = {
  id: 0,
  code: '',
  name: '',
  avatar: null,
  description: ''
};

export interface SubjectState {
  subjects: Array<Subject>;
  currentSubject: Subject;
}

export const subjectState: SubjectState = {
  subjects: null,
  currentSubject: null
};

const _subjectReducer = createReducer(
  subjectState,
  on(SubjectActions.loadSubject, state => state),
  on(SubjectActions.loadSubjectSuccess, (state, action) => {
    return {
      ...state,
      subjects: action.subjects
    };
  }),
  on(SubjectActions.loadSubjectById, state => state),
  on(SubjectActions.loadSubjectByIdSuccess, (state, action) => {
    return {
      ...state,
      currentSubject:
        action && action.subject ? action.subject : initializeSubject
    };
  }),

  on(SubjectActions.setCurrentSubject, (state, action) => {
    return {
      ...state,
      currentSubject:
        action && action.subject ? action.subject : initializeSubject
    };
  }),

  on(SubjectActions.loadSubjectFailure, state => state),
  on(SubjectActions.createSubject, state => state),
  on(SubjectActions.createSubjectSuccess, (state, action) => {
    return { ...state, subjects: [...state.subjects, action.subject] };
  }),
  on(SubjectActions.createSubjectFailure, state => state),
  on(SubjectActions.updateSubject, state => state),
  on(SubjectActions.updateSubjectSuccess, (state, action) => {
    const updatedSubjects = state.subjects.map(item =>
      action.subject.id === item.id ? action.subject : item
    );

    return { ...state, subjects: updatedSubjects };
  }),
  on(SubjectActions.updateSubjectFailure, state => state),
  on(SubjectActions.deleteSubject, state => state),
  on(SubjectActions.deleteSubjectSuccess, (state, action) => {
    return {
      ...state,
      subjects: state.subjects.filter(item => item.id !== action.subjectId)
    };
  }),
  on(SubjectActions.deleteSubjectFailure, state => state)
);

export function subjectReducer(state, action) {
  return _subjectReducer(state, action);
}
