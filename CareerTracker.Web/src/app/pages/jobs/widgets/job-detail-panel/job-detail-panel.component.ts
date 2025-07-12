import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ct-job-detail-panel',
  standalone: true,
  imports: [CommonModule, SidebarModule, CardModule, ButtonModule],
  templateUrl: './job-detail-panel.component.html',
  styleUrls: ['./job-detail-panel.component.scss'],
})
export class JobDetailPanelComponent {
  @Input() job: any | null = null;
  @Output() close = new EventEmitter<void>();

  isVisible = true; // controls sidebar visibility
}
