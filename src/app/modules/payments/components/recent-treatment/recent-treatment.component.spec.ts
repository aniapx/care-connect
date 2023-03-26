import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTreatmentComponent } from './recent-treatment.component';

describe('RecentTreatmentComponent', () => {
  let component: RecentTreatmentComponent;
  let fixture: ComponentFixture<RecentTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentTreatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
