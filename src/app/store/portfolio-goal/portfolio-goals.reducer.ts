import { createReducer, on } from "@ngrx/store";
import { IPortfolioGoalState } from "./portfolio-goal.interface";
import { loadPortfolioGoalsSuccess } from "./portfolio-goals.actions";

export const initialState: IPortfolioGoalState = {
  goals: []
};

export const portfolioGoalsReducer = createReducer(
  initialState,
  on(loadPortfolioGoalsSuccess, (state, { goals }) => {
    return {
      ...state,
      goals,
    };
  }),
);
