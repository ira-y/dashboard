import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPolicyState } from "./policy.interface";

export const selectPoliciesState = createFeatureSelector<IPolicyState>('policies');

export const selectAllPolicies = createSelector(
  selectPoliciesState,
  state => state.items
);

export const selectFilteredPolicies = createSelector(
  selectPoliciesState,
  state => state.filteredItems
);

export const selectSelectedPolicy = createSelector(
  selectPoliciesState,
  state => state.selectedPolicy
);

export const selectPoliciesLoading = createSelector(
  selectPoliciesState,
  state => state.loading
);

export const selectPoliciesError = createSelector(
  selectPoliciesState,
  state => state.error
);

export const selectCreatingPolicy = createSelector(
  selectPoliciesState,
  state => state.creatingPolicy
);

export const selectUpdatingPolicy = createSelector(
  selectPoliciesState,
  state => state.updatingPolicy
);

export const selectDeletingPolicy = createSelector(
  selectPoliciesState,
  state => state.deletingPolicy
);

export const selectRenewingPolicy = createSelector(
  selectPoliciesState,
  state => state.renewingPolicy
);

export const selectPoliciesActiveFilter = createSelector(
  selectPoliciesState,
  state => state.activeFilter
);

export const selectPoliciesSortBy = createSelector(
  selectPoliciesState,
  state => state.sortBy
);

export const selectPoliciesSortDirection = createSelector(
  selectPoliciesState,
  state => state.sortDirection
);