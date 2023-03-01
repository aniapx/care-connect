import { IPatient } from '@app/shared/models/patient';
import { createAction, props } from '@ngrx/store';

export const setPage = createAction(
    '[App] Set Page',
    props<{
        title: string;
        menuOptions: string[];
        id: number;
        icon: string;
    }>()
);

export const setUser = createAction(
    '[App] Set User',
    props<{
        name: string;
        lastName: string;
        email: string;
        photoUrl: string;
        id: number;
    }>()
);

export const setPatient = createAction(
    '[App] Set Patient',
    props<IPatient>()
);

