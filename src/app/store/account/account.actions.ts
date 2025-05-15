import { createAction, props } from "@ngrx/store";
import { IAccount } from "../../shared/interfaces/account.interface";
import { IAccountDetail } from "../../shared/interfaces/account-detail.interface";

export const loadAccounts = createAction('[Accounts] Load Accounts');
export const loadAccountsSuccess = createAction(
  '[Accounts] Load Accounts Success',
  props<{ accounts: IAccount[] }>()
);
export const loadAccountsFailure = createAction(
  '[Accounts] Load Accounts Failure',
  props<{ error: any }>()
);


export const loadAccountDetail = createAction(
  '[Accounts] Load Account Detail',
  props<{ accountId: string }>()
);
export const loadAccountDetailSuccess = createAction(
  '[Accounts] Load Account Detail Success',
  props<{ account: IAccount }>()
);
export const loadAccountDetailFailure = createAction(
  '[Accounts] Load Account Detail Failure',
  props<{ error: any }>()
);

export const loadPolicies = createAction('[Accounts] Load Policies');
export const loadPoliciesSuccess = createAction(
  '[Accounts] Load Policies Success',
  props<{ policies: any[] }>()
);
export const loadPoliciesFailure = createAction(
  '[Accounts] Load Policies Failure',
  props<{ error: any }>()
);