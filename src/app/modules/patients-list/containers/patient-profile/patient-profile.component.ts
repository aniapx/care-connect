import { Component } from '@angular/core';
import { IPatient } from '@app/shared/models/patient';
import { Store } from '@ngrx/store';
import * as AppActions from '@core/store';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent {
  public patient: IPatient = {
    id: 0,
    name: 'Diane',
    lastname: 'Cooper',
    birthDate: '2002-02-22',
    gender: 'Female',
    email: 'diane.cooper@gmail.com',
    phoneNumber: '123 123 456',
    lastAppointmentDate: '2022-03-15',
    nextAppointmentDate: '2023-05-19',
    registrationDate: '2019-07-02',
    address: {
      city: 'New York',
      street: '5th Avenue',
      houseNumber: 5,
      flatNumber: 30,
      zipCode: '123345'
    },
    membershipStatus: true
  };

  private readonly page = {
    title: `${this.patient.lastname}, ${this.patient.name}`,
    menuOptions: [],
    id: 1,
    icon: 'fa-solid fa-user',
  };

  constructor(
    private store: Store
  ) {
    this.store.dispatch(AppActions.setPage(this.page));
    this.store.dispatch(AppActions.setPatient(this.patient));
  }
}
