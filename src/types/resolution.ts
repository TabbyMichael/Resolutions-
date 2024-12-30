export interface Resolution {
  id: string;
  title: string;
  description: string;
  targetDate: Date;
  timeSpent: number; // in minutes
  category: 'personal' | 'professional' | 'health' | 'financial';
  status: 'not-started' | 'in-progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}