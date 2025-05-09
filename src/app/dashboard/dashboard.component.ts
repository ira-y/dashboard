import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MarketIntelligenceComponent } from "../market-intelligence/market-intelligence.component";
import { MyAccountsComponent } from '../my-accounts/my-accounts.component';
import { PortfolioGoalsComponent } from "../portfolio-goals/portfolio-goals.component";
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { loadPortfolioGoals } from '../store/portfolio-goal/portfolio-goals.actions';
import { loadTasks } from '../store/task/tasks.actions';
import { WorkQueueComponent } from "../work-queue/work-queue.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    WorkQueueComponent,
    PortfolioGoalsComponent,
    QuickActionsComponent,
    MarketIntelligenceComponent,
    MyAccountsComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.store.dispatch(loadTasks());
    this.store.dispatch(loadPortfolioGoals());
  }
}
