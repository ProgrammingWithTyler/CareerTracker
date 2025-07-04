import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JobSummaryCardComponent } from '../../shared/widgets/job-summary-card/job-summary-card.component';
import { DeadlineTrackerWidgetComponent } from '../../shared/widgets/deadline-tracker-widget/deadline-tracker-widget.component';
import { RecentActivityListComponent } from '../../shared/widgets/recent-activity-list/recent-activity-list.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    ButtonModule,
    JobSummaryCardComponent,
    DeadlineTrackerWidgetComponent,
    RecentActivityListComponent,
  ],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage {}
