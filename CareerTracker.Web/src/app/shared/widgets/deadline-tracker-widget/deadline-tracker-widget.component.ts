import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'ct-deadline-tracker-widget',
  standalone: true,
  imports: [CardModule, ListboxModule],
  templateUrl: './deadline-tracker-widget.component.html',
  styleUrl: './deadline-tracker-widget.component.scss',
})
export class DeadlineTrackerWidgetComponent {
  deadlines = [
    { title: 'Follow up with Google', due: 'in 2 days' },
    { title: 'Submit resume to Netflix', due: 'by Friday' },
    { title: 'Schedule call with recruiter', due: 'next week' },
  ];
}
