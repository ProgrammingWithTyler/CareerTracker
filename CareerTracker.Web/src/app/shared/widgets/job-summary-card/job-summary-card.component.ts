import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'ct-job-summary-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './job-summary-card.component.html',
  styleUrl: './job-summary-card.component.scss',
})
export class JobSummaryCardComponent {}
