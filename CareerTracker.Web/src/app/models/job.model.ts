export interface Job {
  id: number;
  title: string;
  company: string;
  status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected';
  appliedDate: string;
}
