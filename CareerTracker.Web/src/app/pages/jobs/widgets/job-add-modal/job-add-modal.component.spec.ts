import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAddModalComponent } from './job-add-modal.component';

describe('JobAddModalComponent', () => {
  let component: JobAddModalComponent;
  let fixture: ComponentFixture<JobAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobAddModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
