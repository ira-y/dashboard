import { createAction, props } from "@ngrx/store";
import { IPortfolioGoal } from "../../shared/interfaces/portfolio-goal.interface";

export const loadPortfolioGoals = createAction(
  '[Portfolio Goals] Load Portfolio Goals'
);

export const loadPortfolioGoalsSuccess = createAction(
  '[Portfolio Goals] Load Portfolio Goals Success',
  props<{ goals: IPortfolioGoal[] }>()
);

export const loadPortfolioGoalsFailure = createAction(
  '[Portfolio Goals] Load Portfolio Goals Failure'
);
