import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WidgetComponent } from './components/widget/widget.component';
import { WidgetEarningsComponent } from './components/widget-earnings/widget-earnings.component';
import { WidgetTotalPatientsComponent } from './components/widget-total-patients/widget-total-patients.component';
import { WidgetAppointmentsComponent } from './components/widget-appointments/widget-appointments.component';



@NgModule({
  declarations: [
    DashboardComponent,
    WidgetComponent,
    WidgetEarningsComponent,
    WidgetTotalPatientsComponent,
    WidgetAppointmentsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
