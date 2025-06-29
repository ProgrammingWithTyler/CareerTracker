import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'ct-recent-activity-list',
  standalone: true,
  imports: [CardModule],
  templateUrl: './recent-activity-list.component.html',
  styleUrl: './recent-activity-list.component.scss',
})
export class RecentActivityListComponent {
  activities = [
    'Added job: Senior Developer at Meta',
    'Updated resume PDF',
    'Logged phone interview with Amazon',
  ];
}
