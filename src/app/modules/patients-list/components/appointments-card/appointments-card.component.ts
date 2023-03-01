import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments-card',
  templateUrl: './appointments-card.component.html',
  styleUrls: ['./appointments-card.component.scss']
})
export class AppointmentsCardComponent {
  public activeTab: 'upcoming' | 'past' = 'upcoming';

  public onTabClick(tab: 'upcoming' | 'past'): void {
    this.activeTab = tab;
  }
}
