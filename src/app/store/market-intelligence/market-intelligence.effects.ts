import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addMarketIntelligence, addMarketIntelligenceFailure, addMarketIntelligenceSuccess, deleteMarketIntelligence, deleteMarketIntelligenceFailure, deleteMarketIntelligenceSuccess, loadMarketIntelligence, loadMarketIntelligenceFailure, loadMarketIntelligenceSuccess, updateMarketIntelligence, updateMarketIntelligenceFailure, updateMarketIntelligenceSuccess } from "./market-intelligence.actions";
import { catchError, concatMap, map, mergeMap, of, switchMap } from "rxjs";
import { IMarketIntelligenceService } from "../../shared/services/market-intelligence.service";

@Injectable()
export class MarketIntelligenceEffects {
  loadMarketIntelligence$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMarketIntelligence),
      switchMap(() =>
        this.marketIntelligenceService.getMarketIntelligence().pipe(
          map(items => loadMarketIntelligenceSuccess({ items })),
          catchError(error => of(loadMarketIntelligenceFailure({ error })))
        )
      )
    )
  );

  addMarketIntelligence$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addMarketIntelligence),
      concatMap(({ item }) =>
        this.marketIntelligenceService.addMarketIntelligence(item).pipe(
          map(newItem => addMarketIntelligenceSuccess({ item: newItem })),
          catchError(error => of(addMarketIntelligenceFailure({ error })))
        )
      )
    )
  );

  updateMarketIntelligence$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateMarketIntelligence),
      concatMap(({ id, changes }) =>
        this.marketIntelligenceService.updateMarketIntelligence(id, changes).pipe(
          map(updatedItem => updateMarketIntelligenceSuccess({ item: updatedItem })),
          catchError(error => of(updateMarketIntelligenceFailure({ error })))
        )
      )
    )
  );

  deleteMarketIntelligence$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteMarketIntelligence),
      mergeMap(({ id }) =>
        this.marketIntelligenceService.deleteMarketIntelligence(id).pipe(
          map(() => deleteMarketIntelligenceSuccess({ id })),
          catchError(error => of(deleteMarketIntelligenceFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private marketIntelligenceService: IMarketIntelligenceService
  ) {}
}
