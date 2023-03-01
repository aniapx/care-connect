import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, Observable } from 'rxjs';
import { AppState, selectPage } from '../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string | null = null;

  public page$: Observable<any> | undefined;

  constructor(private store: Store<AppState>) {
    this.page$ = this.store.select(selectPage).pipe(
      distinctUntilChanged()
    );
  }
}
