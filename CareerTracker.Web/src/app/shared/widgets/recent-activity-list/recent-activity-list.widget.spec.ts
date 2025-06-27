import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentActivityListWidget } from './recent-activity-list.widget';

describe('RecentActivityListWidget', () => {
  let component: RecentActivityListWidget;
  let fixture: ComponentFixture<RecentActivityListWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentActivityListWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentActivityListWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
