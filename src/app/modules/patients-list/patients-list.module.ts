import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListRoutingModule } from './patients-list-routing.module';
import { PatientsListComponent } from './containers/patient-list/patients-list.component';
import { PatientProfileComponent } from './containers/patient-profile/patient-profile.component';
import { PatientDataCardComponent } from './components/patient-data-card/patient-data-card.component';
import { NotesCardComponent } from './components/notes-card/notes-card.component';
import { DocumentsCardComponent } from './components/documents-card/documents-card.component';
import { AppointmentsCardComponent } from './components/appointments-card/appointments-card.component';



@NgModule({
  declarations: [
    PatientsListComponent,
    PatientProfileComponent,
    PatientDataCardComponent,
    NotesCardComponent,
    DocumentsCardComponent,
    AppointmentsCardComponent
  ],
  imports: [
    CommonModule,
    PatientsListRoutingModule
  ]
})
export class PatientsListModule { }
