import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsListComponent } from './containers/patient-list/patients-list.component';
import { PatientProfileComponent } from './containers/patient-profile/patient-profile.component';

const routes: Routes = [
  { path: '', component: PatientsListComponent },
  { path: ':id', component: PatientProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsListRoutingModule { }
