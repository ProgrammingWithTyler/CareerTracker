export interface Job {
  id: number;
  title: string;
  company: string;
  status: string;
  appliedDate: Date;
  source?: string;
  jobUrl?: string;
  notes?: string;
}
