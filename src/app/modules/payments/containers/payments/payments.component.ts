import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppActions from '../../../../core/store';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
  private readonly page = {
    title: 'Payment Information',
    menuOptions: [],
    id: 0,
    icon: 'fa-solid fa-wallet',
  };

  constructor(private store: Store) {
    this.store.dispatch(AppActions.setPage(this.page));
  }
}
