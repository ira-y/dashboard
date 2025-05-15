import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICommunicationState } from "./communication.interface";

export const selectCommunicationsState = createFeatureSelector<ICommunicationState>('communications');

export const selectAllCommunications = createSelector(
  selectCommunicationsState,
  state => state.items
);

export const selectCommunicationsLoading = createSelector(
  selectCommunicationsState,
  state => state.loading
);

export const selectCommunicationsError = createSelector(
  selectCommunicationsState,
  state => state.error
);

export const selectSendingReply = createSelector(
  selectCommunicationsState,
  state => state.sendingReply
);