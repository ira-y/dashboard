import { createReducer, on } from "@ngrx/store";
import { getUserSuccess } from "./user.actions";
import { IUserState } from "./user.interface";

export const initialState: IUserState = {
  data: null,
  isLoggedIn: false
};

export const userReducer = createReducer(
  initialState,
  on(getUserSuccess, (state, { user }) => ({
    ...state,
    data: user,
    isLoggedIn: true
  }))
);