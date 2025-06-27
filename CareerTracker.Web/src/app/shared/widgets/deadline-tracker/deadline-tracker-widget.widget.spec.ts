import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineTrackerWidgetWidget } from './deadline-tracker-widget.widget';

describe('DeadlineTrackerWidgetWidget', () => {
  let component: DeadlineTrackerWidgetWidget;
  let fixture: ComponentFixture<DeadlineTrackerWidgetWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeadlineTrackerWidgetWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeadlineTrackerWidgetWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
