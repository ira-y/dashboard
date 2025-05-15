import { IAccountState } from "./account/account.interface";
import { ICommunicationState } from "./communication/communication.interface";
import { IMarketIntelligenceState } from "./market-intelligence/market-intelligence.interface";
import { IPolicyState } from "./policy/policy.interface";
import { IPortfolioGoalState } from "./portfolio-goal/portfolio-goal.interface";
import { ITaskState } from "./task/task.interface";
import { IUserState } from "./user/user.interface";

export interface AppState {
  tasks: ITaskState;
  accounts: IAccountState;
  portfolioGoals: IPortfolioGoalState;
  marketIntelligence: IMarketIntelligenceState;
  communications: ICommunicationState;
  policies: IPolicyState;
  user: IUserState
}