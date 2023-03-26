import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPatientOverview } from 'src/app/shared/models/patient';
import * as AppActions from '@core/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {
  private readonly page = {
    title: 'Patient list',
    menuOptions: [],
    id: 1,
    icon: 'fa-solid fa-user',
  };

  public readonly patients: IPatientOverview[] = [
    {
      id: 0,
      name: 'Joe',
      lastname: 'Doe',
      email: 'joe.doe@gmail.com',
      phoneNumber: '123 123 456',
      lastAppointmentDate: '2022-03-15',
      nextAppointmentDate: '2023-05-19',
      registrationDate: '2019-07-02',
      address: {
        city: 'New York',
        street: '5th Ave',
        houseNumber: 5,
        flatNumber: 30,
        zipCode: '123456'
      }
    },
    {
      id: 1,
      name: 'Joe',
      lastname: 'Doe2',
      email: 'joe.doe@gmail.com',
      phoneNumber: '123 123 456',
      lastAppointmentDate: '2022-04-14',
      nextAppointmentDate: '2023-04-19',
      registrationDate: '2018-07-02',
      address: {
        city: 'New York',
        street: '5th Ave',
        houseNumber: 5,
        flatNumber: 30,
        zipCode: '123456'
      }
    }
  ];

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.store.dispatch(AppActions.setPage(this.page));

    this.patients = [...this.patients, ...this.patients, ...this.patients, ...this.patients, ...this.patients, ...this.patients]
  }

  ngOnInit(): void {
    this.patients.sort((a, b) => this.sortByString(a.lastname, b.lastname));
  }

  public onRowClick(id: number): void {
    this.router.navigate(['patients-list', id]);
  }

  public onSort(column: string): void {
    switch (column) {
      case 'next-appt':
        this.patients.sort((a, b) => this.sortByDate(a.nextAppointmentDate, b.nextAppointmentDate));
        break;
      case 'last-appt':
        this.patients.sort((a, b) => this.sortByDate(a.lastAppointmentDate, b.lastAppointmentDate));
        break;
      case 'registration':
        this.patients.sort((a, b) => this.sortByDate(a.registrationDate, b.registrationDate));
        break;
      case 'name':
        this.patients.sort((a, b) => this.sortByDate(a.lastname, b.lastname));
        break;
    }
  }

  public onPrintClick(): void {

  }

  public onFilterClick(): void {

  }

  private sortByDate(a: string | undefined, b: string | undefined): number {
    const dateA = a ? new Date(a) : undefined;
    const dateB = b ? new Date(b) : undefined;
    if (dateA && dateB) {
      return dateA.getTime() - dateB.getTime();
    } else if (dateA && !dateB) {
      return -1;
    } else if (!dateA && dateB) {
      return 1;
    } else {
      return 0;
    }
  }

  private sortByString(a: string, b: string): number {
    return a.localeCompare(b);
  }
}
