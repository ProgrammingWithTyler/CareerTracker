import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Job } from '../../models/job.model';
import { FormsModule } from '@angular/forms';
import { JobDetailPanelComponent } from './widgets/job-detail-panel/job-detail-panel.component';

@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    JobDetailPanelComponent,
  ],
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage {
  jobs: Job[] = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Google',
      status: 'Applied',
      appliedDate: '2024-06-01',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'Meta',
      status: 'Interviewing',
      appliedDate: '2024-06-03',
    },
    {
      id: 3,
      title: 'Full Stack Dev',
      company: 'Netflix',
      status: 'Offer',
      appliedDate: '2024-06-10',
    },
  ];

  filterText = '';

  selectedJob: any = null;

  onJobSelected(job: any) {
    this.selectedJob = job;
  }
}
