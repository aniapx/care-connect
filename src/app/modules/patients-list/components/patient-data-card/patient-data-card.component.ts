import { Component, Input } from '@angular/core';
import { IPatient } from '@app/shared/models/patient';

@Component({
  selector: 'app-patient-data-card',
  templateUrl: './patient-data-card.component.html',
  styleUrls: ['./patient-data-card.component.scss']
})
export class PatientDataCardComponent {
  @Input() public patient!: IPatient;
}
