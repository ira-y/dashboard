import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { IAccount } from "../interfaces/account.interface";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccounts(): Observable<IAccount[]> {
    return of([
      {
        id: '1',
        name: 'NAMEX Tech Solutions',
        type: 'Large Enterprise',
        line: 'D&O Liability',
        broker: 'Willis Towers',
        renewalDate: '04/16/2025',
        premium: 2300000,
        ratedPremium: 2800000,
        lossRatio: 25,
        lossRatioColor: 'green',
        appetite: 'HIGH',
        status: 'Active',
        triage: 180,
        winnability: 'Very Strong',
      },
      {
        id: '2',
        name: 'Alliance Healthcare Systems',
        type: 'Mid-Market',
        line: 'Medical Malpractice',
        broker: 'Aon Risk',
        renewalDate: '06/30/2025',
        premium: 1700000,
        ratedPremium: 1900000,
        lossRatio: 38,
        lossRatioColor: 'yellow',
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
        premium: 875000,
        ratedPremium: 920000,
        lossRatio: 25,
        lossRatioColor: 'green',
        appetite: 'HIGH',
        status: 'Active',
        triage: 192,
        winnability: 'Medium',
      },
      {
        id: '4',
        name: 'GreenField Energy Ltd',
        type: 'Energy Sector',
        line: 'Environmental Liability',
        broker: 'Aon Risk',
        renewalDate: '07/22/2025',
        premium: 1200000,
        ratedPremium: 1400000,
        lossRatio: 67,
        lossRatioColor: 'red',
        appetite: 'CAUTIOUS',
        status: 'Under review',
        triage: 158,
        winnability: 'Weak',
      }
    ]);
  }

  getAccount(id: string): Observable<IAccount> {
    return this.getAccounts().pipe(
      catchError(() => of([] as IAccount[])),
    ).pipe(
      map(accounts => {
        const account = accounts.find(a => a.id === id);
        if (!account) {
          throw new Error(`Account with id ${id} not found`);
        }
        return account;
      })
    );
  }
}