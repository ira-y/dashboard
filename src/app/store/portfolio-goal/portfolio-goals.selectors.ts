import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPortfolioGoalState } from "./portfolio-goal.interface";

export const selectPortfolioGoalsState = createFeatureSelector<IPortfolioGoalState>('portfolioGoals');

export const selectAllPortfolioGoals = createSelector(
  selectPortfolioGoalsState,
  state => state.goals
);
