import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';

export const selectPage = createSelector(
    (state: AppState) => state.app.page,
    (page) => page
);

export const selectUser = createSelector(
    (state: AppState) => state.app.user,
    (user) => user
);

export const selectPatient = createSelector(
    (state: AppState) => state.app.patient,
    (patient) => patient
);