export interface IPortfolioGoal {
  id: string;
  type: 'PORTFOLIO LOSS RATIO TARGET' | 'RENEWAL RETENTION' | 'NEW BUSINESS TARGET' | 'ANNUAL GWP TARGET';
  target: number;
  current: number;
  percentage: number;
  additionalInfo?: string;
  percentStatus: number;
}
