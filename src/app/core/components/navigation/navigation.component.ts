import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public routes: { title: string, link: string, icon: string, isMobile: boolean }[] = [
    { title: 'Home', link: '', icon: 'fa-solid fa-house', isMobile: true },
    { title: 'Calendar', link: 'calendar', icon: 'fa-solid fa-calendar', isMobile: true },
    { title: 'Patients list', link: '/patients-list', icon: 'fa-solid fa-user', isMobile: false },
    { title: 'Messages', link: '', icon: 'fa-solid fa-message', isMobile: true },
    { title: 'Finances', link: '', icon: 'fa-solid fa-wallet', isMobile: false },
    { title: 'Settings', link: '', icon: 'fa-solid fa-gear', isMobile: true },
  ];

  public isNavigationExpanded: boolean = false;

  public onNavigationExpandClick(): void {
    this.isNavigationExpanded = !this.isNavigationExpanded;
  }
}
