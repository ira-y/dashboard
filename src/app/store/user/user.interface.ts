import { IUser } from "../../shared/interfaces/user.interface";

export interface IUserState {
  data: IUser | null;
  isLoggedIn: boolean;
}