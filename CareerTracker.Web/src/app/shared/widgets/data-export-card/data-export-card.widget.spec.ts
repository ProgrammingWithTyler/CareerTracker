import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataExportCardWidget } from './data-export-card.widget';

describe('DataExportCardWidget', () => {
  let component: DataExportCardWidget;
  let fixture: ComponentFixture<DataExportCardWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataExportCardWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataExportCardWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
