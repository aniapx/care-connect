import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppActions from '../../core/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private readonly page = {
    title: 'Dashboard Overview',
    menuOptions: [],
    id: 0,
    icon: 'fa-solid fa-home',
  };

  constructor(private store: Store) {
    this.store.dispatch(AppActions.setPage(this.page));
  }
}
