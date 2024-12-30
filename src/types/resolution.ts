export interface Resolution {
  id: string;
  title: string;
  description: string;
  category: string;
  startDate: Date;
  targetDate: Date;
  timeSpent: number; // in minutes
  status: 'not-started' | 'in-progress' | 'completed';
  progress: number; // 0-100
}