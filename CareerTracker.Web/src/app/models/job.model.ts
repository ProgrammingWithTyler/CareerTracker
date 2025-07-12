export interface Job {
  id: number;
  title: string;
  company: string;
  status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected' | 'Cancelled';
  appliedDate: string;
}
