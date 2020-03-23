import { createReducer, on } from '@ngrx/store';
import * as UniversityActions from '@app/actions';
import { University } from '@interfaces/university.interface';
import { Status } from '@enums/status.enum';

export const universityFeatureKey = 'university';

const initializeUniversity: University = {
  id: 0,
  name: null,
  displayOrder: null,
  status: Status.Active,
  avatar: null
};

export interface UniversityState {
  universities: Array<University>;
  currentUniversity: University;
}

export const UniversityState: UniversityState = {
  universities: null,
  currentUniversity: null
};

const _universityReducer = createReducer(
  UniversityState,
  on(UniversityActions.loadUniversity, state => state),
  on(UniversityActions.loadUniversitySuccess, (state, action) => {
    return {
      ...state,
      universities: action.universities
    };
  }),
  on(UniversityActions.loadUniversityById, state => state),
  on(UniversityActions.loadUniversityByIdSuccess, (state, action) => {
    return {
      ...state,
      currentUniversity:
        action && action.university ? action.university : initializeUniversity
    };
  }),

  on(UniversityActions.setCurrentUniversity, (state, action) => {
    return {
      ...state,
      currentUniversity:
        action && action.university ? action.university : initializeUniversity
    };
  }),

  on(UniversityActions.loadUniversityFailure, state => state),
  on(UniversityActions.createUniversity, state => state),
  on(UniversityActions.createUniversitySuccess, (state, action) => {
    return {
      ...state,
      universities: state.universities
        ? [...state.universities, action.university]
        : [action.university]
    };
  }),
  on(UniversityActions.createUniversityFailure, state => state),
  on(UniversityActions.updateUniversity, state => state),
  on(UniversityActions.updateUniversitySuccess, (state, action) => {
    const updatedUniversitys = state.universities.map(item =>
      action.university.id === item.id ? action.university : item
    );

    return { ...state, universities: updatedUniversitys };
  }),
  on(UniversityActions.updateUniversityFailure, state => state),
  on(UniversityActions.deleteUniversity, state => state),
  on(UniversityActions.deleteUniversitySuccess, (state, action) => {
    return {
      ...state,
      universities: state.universities.filter(
        item => item.id !== action.universityId
      )
    };
  }),
  on(UniversityActions.deleteUniversityFailure, state => state)
);

export function universityReducer(state, action) {
  return _universityReducer(state, action);
}
