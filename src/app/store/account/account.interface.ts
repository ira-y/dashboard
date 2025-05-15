import { IAccountDetail } from "../../shared/interfaces/account-detail.interface";
import { IAccount } from "../../shared/interfaces/account.interface";

export interface IAccountState {
  accounts: IAccount[] | null;
  selectedAccountDetail: IAccountDetail | null;
  loading: boolean;
  error: any;
  currentAccount: IAccount | null;
  policies: any[];
  messages: any[],
}