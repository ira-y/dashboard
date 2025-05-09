import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { loadAccountDetail, loadAccountDetailFailure, loadAccountDetailSuccess, loadAccounts, loadAccountsFailure, loadAccountsSuccess } from "./account.actions";
import { AccountService } from "../../shared/services/account.service";

@Injectable()
export class AccountEffects {
  loadAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAccounts),
      switchMap(() =>
        this.accountService.getAccounts().pipe(
          map(accounts => loadAccountsSuccess({ accounts })),
          catchError(error => of(loadAccountsFailure({ error })))
        )
      )
    )
  );

  loadAccountDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAccountDetail),
      switchMap(({ accountId }) =>
        this.accountService.getAccount(accountId).pipe(
          map(account => 
            loadAccountDetailSuccess({ account })
          ),
          catchError(error =>
            of(loadAccountDetailFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) {}
}