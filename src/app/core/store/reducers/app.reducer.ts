import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/app.state';
import { setPage, setPatient, setUser } from '../actions/app.actions';

export const appReducer = createReducer(
    initialState,
    on(setPage, (state, { title, menuOptions, id, icon }) => {
        return {
            ...state,
            page: {
                title,
                menuOptions,
                id,
                icon
            },
        }
    }),
    on(setUser, (state, { name, lastName, email, photoUrl, id }) => ({
        ...state,
        user: {
            name,
            lastName,
            email,
            photoUrl,
            id,
        },
    })),
    on(setPatient, (state, patient) => ({
        ...state,
        patient,
    }))
);
