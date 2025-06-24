import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { JobSummary } from '../../components/dashboard/job-summary/job-summary';
import { ProgressTracker } from '../../components/dashboard/progress-tracker/progress-tracker';
import { RecentActivity } from '../../components/dashboard/recent-activity/recent-activity';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    DividerModule,
    ButtonModule,
    JobSummary,
    ProgressTracker,
    RecentActivity,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
