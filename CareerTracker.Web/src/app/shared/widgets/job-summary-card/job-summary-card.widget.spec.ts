import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSummaryCardWidget } from './job-summary-card.widget';

describe('JobSummaryCardWidget', () => {
  let component: JobSummaryCardWidget;
  let fixture: ComponentFixture<JobSummaryCardWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSummaryCardWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSummaryCardWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
