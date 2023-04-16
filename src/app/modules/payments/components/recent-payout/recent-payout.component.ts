import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-payout',
  templateUrl: './recent-payout.component.html',
  styleUrls: ['./recent-payout.component.scss']
})
export class RecentPayoutComponent {
  public payments = [
    {
      date: '2022-01-23',
      method: 'Bank',
      notes: '1123423454536',
      amount: 123
    },
    {
      date: '2022-09-23',
      method: 'Card',
      notes: '11AHJ93454536',
      amount: 30
    },
    {
      date: '2023-03-23',
      method: 'Cash',
      notes: '11AHJ93454536',
      amount: 130
    },
    {
      date: null,
      method: '-',
      notes: '-',
      amount: 130
    }
  ];
}
