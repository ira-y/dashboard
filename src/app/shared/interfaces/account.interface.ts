export interface IAccount {
  id: string;
  name: string;
  type: string;
  line: string;
  broker: string;
  renewalDate: string;
  premium: any;
  ratedPremium: any;
  lossRatio: number;
  lossRatioColor: string;
  appetite: 'HIGH' | 'MEDIUM' | 'CAUTIOUS' | 'LOW';
  status: 'Active' | 'Under review' | string;
  triage: number;
  winnability: 'Very Strong' | 'Strong' | 'Medium' | 'Weak';
  address?: string;
  contacts?: string[];
  underwriter?: string;
}