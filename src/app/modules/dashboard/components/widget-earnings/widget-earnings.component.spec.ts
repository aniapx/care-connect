import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEarningsComponent } from './widget-earnings.component';

describe('WidgetEarningsComponent', () => {
  let component: WidgetEarningsComponent;
  let fixture: ComponentFixture<WidgetEarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetEarningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
