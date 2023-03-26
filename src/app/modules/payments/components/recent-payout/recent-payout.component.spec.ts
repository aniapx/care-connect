import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPayoutComponent } from './recent-payout.component';

describe('RecentPayoutComponent', () => {
  let component: RecentPayoutComponent;
  let fixture: ComponentFixture<RecentPayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentPayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
