export interface IPolicy {
  id: string;
  name: string;
  premium: number;
  effectiveDate: string;
  expiryDate: string;
  status: 'Active' | 'Pending' | string;
  originalPremium?: number;
  currentPremium?: number;
  renewalPremium?: number;
  renewalChange?: number;
  increase?: number;
}