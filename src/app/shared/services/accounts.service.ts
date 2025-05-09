import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IAccount } from "../interfaces/account.interface";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

private accounts: IAccount[] = [
  {
    id: '1',
    name: 'NAMEX Tech Solutions',
    type: 'Large Enterprise',
    line: 'D&O Liability',
    broker: 'Willis Towers',
    renewalDate: '04/16/2025',
    premium: '$2.3M',
    ratedPremium: '$2.8M',
    lossRatio: 32,
    lossRatioColor: '#10B981',
    appetite: 'HIGH',
    status: 'Active',
    triage: 180,
    winnability: 'Very Strong'
  },
  {
    id: '2',
    name: 'Alliance Healthcare Systems',
    type: 'Mid-Market',
    line: 'Medical Malpractice',
    broker: 'Aon Risk',
    renewalDate: '06/30/2025',
    premium: '$1.7M',
    ratedPremium: '$1.9M',
    lossRatio: 38,
    lossRatioColor: '#F59E0B',
    appetite: 'MEDIUM',
    status: 'Under review',
    triage: 165,
    winnability: 'Strong'
  },
  {
    id: '3',
    name: 'Maritime Logistics Corp',
    type: 'Shipping/Logistics',
    line: 'Marine Cargo',
    broker: 'Marsh McLennan',
    renewalDate: '09/05/2025',
    premium: '$875K',
    ratedPremium: '$920K',
    lossRatio: 25,
    lossRatioColor: '#10B981',
    appetite: 'HIGH',
    status: 'Active',
    triage: 182,
    winnability: 'Very Strong'
  },
  {
    id: '4',
    name: 'GreenField Energy Ltd',
    type: 'Energy Sector',
    line: 'Environmental Liability',
    broker: 'Aon Risk',
    renewalDate: '07/22/2025',
    premium: '$1.2M',
    ratedPremium: '$1.4M',
    lossRatio: 67,
    lossRatioColor: '#EF4444',
    appetite: 'CAUTIOUS',
    status: 'Under review',
    triage: 158,
    winnability: 'Medium'
  }
];

getAccounts(): Observable<IAccount[]> {
  return of(this.accounts);
}

getAccountById(id: string): Observable<IAccount | undefined> {
  const account = this.accounts.find(a => a.id === id);
  return of(account);
}

searchAccounts(query: string): Observable<IAccount[]> {
  if (!query.trim()) {
    return of(this.accounts);
  }

  const lowercaseQuery = query.toLowerCase();
  const filteredAccounts = this.accounts.filter(account =>
    account.name.toLowerCase().includes(lowercaseQuery) ||
    account.type.toLowerCase().includes(lowercaseQuery) ||
    account.line.toLowerCase().includes(lowercaseQuery) ||
    account.broker.toLowerCase().includes(lowercaseQuery)
  );

  return of(filteredAccounts);
}
}