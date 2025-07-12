import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailPanelComponent } from './job-detail-panel.component';

describe('JobDetailPanelComponent', () => {
  let component: JobDetailPanelComponent;
  let fixture: ComponentFixture<JobDetailPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetailPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
