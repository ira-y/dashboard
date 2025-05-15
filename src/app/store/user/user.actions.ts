import { createAction, props } from "@ngrx/store";
import { IUser } from "../../shared/interfaces/user.interface";

export const getUser = createAction('[User] Get User');
export const getUserSuccess = createAction(
  '[User] Get User Success',
  props<{ user: IUser }>()
);
export const getUserFailure = createAction('[User] Get User Failure');
