import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMarketIntelligenceState } from "./market-intelligence.interface";

export const selectMarketIntelligenceState = createFeatureSelector<IMarketIntelligenceState>('marketIntelligence');

export const selectAllMarketIntelligence = createSelector(
  selectMarketIntelligenceState,
  state => state.items
);

export const selectFilteredMarketIntelligence = createSelector(
  selectMarketIntelligenceState,
  state => state.filteredItems
);

export const selectMarketIntelligenceLoading = createSelector(
  selectMarketIntelligenceState,
  state => state.loading
);

export const selectMarketIntelligenceError = createSelector(
  selectMarketIntelligenceState,
  state => state.error
);

export const selectAddingMarketIntelligence = createSelector(
  selectMarketIntelligenceState,
  state => state.addingItem
);

export const selectUpdatingMarketIntelligence = createSelector(
  selectMarketIntelligenceState,
  state => state.updatingItem
);

export const selectDeletingMarketIntelligence = createSelector(
  selectMarketIntelligenceState,
  state => state.deletingItem
);

export const selectMarketIntelligenceActiveFilter = createSelector(
  selectMarketIntelligenceState,
  state => state.activeFilter
);
