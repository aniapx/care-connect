import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'patients-list', loadChildren: () => import('./modules/patients-list/patients-list.module').then(m => m.PatientsListModule) },
  { path: 'calendar', loadChildren: () => import('./modules/calendar/calendar.module').then(m => m.CalendarModule) },
  { path: 'payments', loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
