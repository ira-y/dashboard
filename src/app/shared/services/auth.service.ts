import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IUser } from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUser(): Observable<IUser> {
    return of({
      id: '111',
      firstName: 'Arthur',
      lastName: 'Robinson',
      email: 'arthur@gmail.com'
    });
  }
}