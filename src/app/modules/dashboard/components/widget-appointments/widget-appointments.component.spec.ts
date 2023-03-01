import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAppointmentsComponent } from './widget-appointments.component';

describe('WidgetAppointmentsComponent', () => {
  let component: WidgetAppointmentsComponent;
  let fixture: ComponentFixture<WidgetAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
