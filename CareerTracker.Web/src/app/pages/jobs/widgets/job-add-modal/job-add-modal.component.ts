import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { Job } from '../../../../models/job.model';

@Component({
  selector: 'ct-job-add-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
  ],
  templateUrl: './job-add-modal.component.html',
  styleUrl: './job-add-modal.component.scss',
})
export class JobAddModalComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      status: ['Applied'],
      appliedDate: [new Date()],
      source: [''],
      jobUrl: [''],
    });
  }

  jobForm!: FormGroup;
  @Input() showModal: boolean = false;
  @Output() jobAdded = new EventEmitter<Job>();
  @Output() closed = new EventEmitter<void>();
  @Output() showModalChange = new EventEmitter<boolean>();

  statusOptions = ['Applied', 'Interviewing', 'Offer', 'Rejected', 'Cancelled'];
  sourceOptions = ['LinkedIn', 'Indeed', 'Referral', 'Other'];

  save() {
    const job: Job = {
      ...this.jobForm.value,
      id: Date.now(), // Temp ID, replace later
    };
    this.jobAdded.emit(job);
    this.close();
  }

  close() {
    this.jobForm.reset();
    this.showModalChange.emit(false);
  }
}
