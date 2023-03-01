import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public routes: { title: string, link: string, icon: string }[] = [
    { title: 'Home', link: '', icon: 'fa-solid fa-house' },
    { title: 'Calendar', link: '', icon: 'fa-solid fa-calendar' },
    { title: 'Patients list', link: '/patients-list', icon: 'fa-solid fa-user' },
    { title: 'Messages', link: '', icon: 'fa-solid fa-message' },
    { title: 'Finances', link: '', icon: 'fa-solid fa-wallet' },
    { title: 'Settings', link: '', icon: 'fa-solid fa-gear' },
  ];
}
