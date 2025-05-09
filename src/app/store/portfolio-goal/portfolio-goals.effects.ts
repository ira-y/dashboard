import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { PortfolioGoalsService } from "../../shared/services/portfolio-goals.service";
import { loadPortfolioGoals, loadPortfolioGoalsFailure, loadPortfolioGoalsSuccess } from "./portfolio-goals.actions";

@Injectable()
export class PortfolioGoalsEffects {
  loadPortfolioGoals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPortfolioGoals),
      switchMap(() =>
        this.portfolioGoalsService.getPortfolioGoals().pipe(
          map(goals => loadPortfolioGoalsSuccess({ goals })),
          catchError(() => of(loadPortfolioGoalsFailure()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private portfolioGoalsService: PortfolioGoalsService
  ) {}
}