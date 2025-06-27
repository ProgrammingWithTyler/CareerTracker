import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeToggleSwitchWidget } from './theme-toggle-switch.widget';

describe('ThemeToggleSwitchWidget', () => {
  let component: ThemeToggleSwitchWidget;
  let fixture: ComponentFixture<ThemeToggleSwitchWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeToggleSwitchWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeToggleSwitchWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
