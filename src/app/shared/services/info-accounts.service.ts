import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface AccountInfo {
  id: string;
  name: string;
  logo: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  accountNumber: string;
  accountType: string;
  broker: {
    name: string;
  };
  underwriter: {
    name: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class InfoAccountsService {
  private accountInfo: AccountInfo = {
    id: '54383',
    name: 'Maritime Logistics Corp',
    logo: 'assets/logos/maritime-logo.png', 
    address: '425 Harbor Boulevard, Suite 300',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98104',
    accountNumber: '54383',
    accountType: 'EXISTING ACCOUNT',
    broker: {
      name: 'Marsh McLennan'
    },
    underwriter: {
      name: 'Kate Johnson'
    }
  };

  getAccountInfo(): Observable<AccountInfo> {
    return of(this.accountInfo);
  }
}