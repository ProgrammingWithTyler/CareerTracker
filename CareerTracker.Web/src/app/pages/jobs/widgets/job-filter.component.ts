import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-job-filter',
  imports: [CommonModule, CardModule],
  templateUrl: './job-filter.component.html',
  styleUrl: './job-filter.component.scss',
})
export class JobFilterComponent {}
