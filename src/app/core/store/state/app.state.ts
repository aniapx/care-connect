import { IPatient } from "@app/shared/models/patient";

export interface AppState {
    app: {
        page: {
            title: string;
            menuOptions: string[];
            id: number;
            icon: string;
        };
        user: {
            name: string;
            lastName: string;
            email: string;
            photoUrl: string;
            id: number;
        };
        patient: IPatient | undefined
    }
}

export const initialState: AppState = {
    app: {
        page: {
            title: '',
            menuOptions: [],
            id: 0,
            icon: ''
        },
        user: {
            name: '',
            lastName: '',
            email: '',
            photoUrl: '',
            id: 0,
        },
        patient: undefined
    }
};
