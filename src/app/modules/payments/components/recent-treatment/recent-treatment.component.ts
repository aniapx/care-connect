import { Component } from '@angular/core';
import { ITreatmentOverview } from '@app/shared/models/treatment-overview';

@Component({
  selector: 'app-recent-treatment',
  templateUrl: './recent-treatment.component.html',
  styleUrls: ['./recent-treatment.component.scss']
})
export class RecentTreatmentComponent {

  public treatments: ITreatmentOverview[] = [
    {
      name: 'Root Canal',
      date: '2022-11-24',
      price: 178,
      patientName: 'Diane Cooper'
    },
    {
      name: 'Bleaching',
      date: '2022-11-23',
      price: 50,
      patientName: 'Ralph McCoy'
    },
    {
      name: 'Scaling',
      date: '2022-11-20',
      price: 20,
      patientName: 'John Smith'
    }
  ];

}
