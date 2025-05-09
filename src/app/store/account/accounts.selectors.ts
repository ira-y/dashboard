import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAccountState } from "./account.interface";

export const selectAccountsState = createFeatureSelector<IAccountState>('accounts');

export const selectAllAccounts = createSelector(
  selectAccountsState,
  state => state.accounts
);

export const selectSelectedAccountDetail = createSelector(
  selectAccountsState,
  state => state.selectedAccountDetail
);

export const selectAccountsLoading = createSelector(
  selectAccountsState,
  state => state.loading
);

export const selectAccountsError = createSelector(
  selectAccountsState,
  state => state.error
);