import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTotalPatientsComponent } from './widget-total-patients.component';

describe('WidgetTotalPatientsComponent', () => {
  let component: WidgetTotalPatientsComponent;
  let fixture: ComponentFixture<WidgetTotalPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetTotalPatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetTotalPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
