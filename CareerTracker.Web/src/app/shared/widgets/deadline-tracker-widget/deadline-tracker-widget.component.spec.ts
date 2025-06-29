import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineTrackerWidgetComponent } from './deadline-tracker-widget.component';

describe('DeadlineTrackerWidgetComponent', () => {
  let component: DeadlineTrackerWidgetComponent;
  let fixture: ComponentFixture<DeadlineTrackerWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeadlineTrackerWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeadlineTrackerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
