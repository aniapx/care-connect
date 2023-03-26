import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './containers/payments/payments.component';
import { RecentPayoutComponent } from './components/recent-payout/recent-payout.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { RecentTreatmentComponent } from './components/recent-treatment/recent-treatment.component';


@NgModule({
  declarations: [
    PaymentsComponent,
    RecentPayoutComponent,
    StatisticsComponent,
    RecentTreatmentComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
