import { createReducer, on } from "@ngrx/store";
import { loadAccounts, loadAccountsFailure, loadAccountsSuccess, loadPolicies, loadPoliciesFailure, loadPoliciesSuccess } from "./account.actions";
import { IAccountState } from "./account.interface";

export const initialState: IAccountState = {
  currentAccount: null,
  policies: [],
  messages: [],
  loading: false,
  error: null,
  accounts: [],
  selectedAccountDetail: null
};

export const accountReducer = createReducer(
  initialState,
  on(loadAccounts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadAccountsSuccess, (state, { accounts }) => ({
    ...state,
    currentAccounts: accounts,
    loading: false
  })),
  on(loadAccountsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(loadPolicies, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadPoliciesSuccess, (state, { policies }) => ({
    ...state,
    policies,
    loading: false
  })),
  on(loadPoliciesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);