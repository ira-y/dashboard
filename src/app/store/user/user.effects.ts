import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "../../shared/services/auth.service";
import { getUser, getUserFailure, getUserSuccess } from "./user.actions";

@Injectable()
export class UserEffects {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      switchMap(() =>
        this.authService.getUser().pipe(
          map(user => getUserSuccess({ user })),
          catchError(() => of(getUserFailure()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}