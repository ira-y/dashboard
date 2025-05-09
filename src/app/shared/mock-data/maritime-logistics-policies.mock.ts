import { IPolicy } from "../interfaces/policy.interface";

export const MARITIME_LOGISTICS_POLICIES_MOCK: IPolicy[] = [
  {
    id: '1',
    name: 'Marine Cargo',
    premium: 585000,
    effectiveDate: '6/30/2026',
    expiryDate: '6/30/2027',
    status: 'Active',
    originalPremium: 565000,
    currentPremium: 610000,
    renewalPremium: 620000,
    renewalChange: 3.3
  },
  {
    id: '2',
    name: 'General Liability',
    premium: 160000,
    effectiveDate: '6/30/2026',
    expiryDate: '6/30/2027',
    status: 'Active',
    originalPremium: 150000,
    currentPremium: 170000,
    renewalPremium: 175000,
    renewalChange: 8.1
  },
  {
    id: '3',
    name: 'Workers Comp',
    premium: 0,
    effectiveDate: 'Pending',
    expiryDate: 'Pending',
    status: 'Pending',
    originalPremium: 0,
    currentPremium: 0,
    renewalPremium: 75000,
    renewalChange: 0
  },
  {
    id: '4',
    name: 'Umbrella',
    premium: 240000,
    effectiveDate: '12/03/2026',
    expiryDate: '12/03/2027',
    status: 'Active',
    originalPremium: 250000,
    currentPremium: 260000,
    renewalPremium: 275000,
    renewalChange: 16.1
  }
];