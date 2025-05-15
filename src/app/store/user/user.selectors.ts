import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState } from "./user.interface";

export const selectUserState = createFeatureSelector<IUserState>('user');

export const selectUserName = createSelector(
  selectUserState,
  state => state.data?.firstName
);
export const selectUserInitials = createSelector(
  selectUserState,
  state => {
    const firstInitial = state.data?.firstName && state.data?.firstName.trim() !== ''
      ? state.data?.firstName.trim()[0].toUpperCase()
      : '';

    const lastInitial = state.data?.lastName && state.data?.lastName.trim() !== ''
      ? state.data?.lastName.trim()[0].toUpperCase()
      : '';

    return firstInitial + lastInitial;
  }
);
export const selectIsLoggedIn = createSelector(
  selectUserState,
  state => state.isLoggedIn
);

