import { IAddress } from "./address";

export interface IPatient extends IPatientOverview {
    birthDate: string;
    gender: 'Female',
    membershipStatus: boolean;
}

export interface IPatientOverview {
    id: number;
    name: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    photoUrl?: string;
    address: IAddress
    nextAppointmentDate?: string;
    lastAppointmentDate?: string;
    registrationDate: string;
}