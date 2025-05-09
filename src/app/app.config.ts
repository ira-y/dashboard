import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { AccountEffects } from './store/account/account.effects';
import { accountReducer } from './store/account/account.reducer';
import { PortfolioGoalsEffects } from './store/portfolio-goal/portfolio-goals.effects';
import { portfolioGoalsReducer } from './store/portfolio-goal/portfolio-goals.reducer';
import { TasksEffects } from './store/task/tasks.effects';
import { tasksReducer } from './store/task/tasks.reducer';
import { UserEffects } from './store/user/user.effects';
import { userReducer } from './store/user/user.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      account: accountReducer,
      user: userReducer,
      tasks: tasksReducer,
      portfolioGoals: portfolioGoalsReducer
    }),
    provideEffects([
      AccountEffects,
      UserEffects,
      TasksEffects,
      PortfolioGoalsEffects
    ]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false
    })
  ]
};
