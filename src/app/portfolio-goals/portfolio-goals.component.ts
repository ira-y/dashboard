import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { IPortfolioGoal } from '../shared/interfaces/portfolio-goal.interface';
import { selectAllPortfolioGoals } from '../store/portfolio-goal/portfolio-goals.selectors';

@Component({
  selector: 'app-portfolio-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-goals.component.html',
  styleUrls: ['./portfolio-goals.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioGoalsComponent implements OnInit {
  allPortfolioGoals$ = this.store.select(selectAllPortfolioGoals);

  private destroyRef = inject(DestroyRef);

  portfolioLossRatioTargetPercentStatus = 0;

  constructor(
    private store: Store,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.calculatePortfolioLossRatioTargetPercentStatus();
  }

  calculatePortfolioLossRatioTargetPercentStatus(): void {
    this.allPortfolioGoals$
      .pipe(
        filter(portfolioGoals => !!portfolioGoals.length),
        takeUntilDestroyed (this.destroyRef)
      )
      .subscribe(portfolioGoals => {
        this.portfolioLossRatioTargetPercentStatus = Math.abs(portfolioGoals[0]?.percentStatus);

        this.cdr.markForCheck();
      });
  }

  shouldShowIndicatorAbove(type: string): boolean {
    return type === 'PORTFOLIO LOSS RATIO TARGET';
  }

  formatCurrency(value: number): string {
    return `$${value}M`;
  }

  isOnTarget(goal: IPortfolioGoal): boolean {
    if (goal.type === 'PORTFOLIO LOSS RATIO TARGET') {
      return goal.current <= goal.target;
    }
    return goal.current >= goal.target;
  }

  getStatusText(goal: IPortfolioGoal): string {
    if (goal.additionalInfo) {
      return goal.additionalInfo;
    }

    if (this.isOnTarget(goal)) {
      return 'ON TARGET';
    }

    return 'OFF TARGET';
  }

  getStatusColor(goal: IPortfolioGoal): string {
    if (goal.additionalInfo && goal.additionalInfo.includes('GOOD')) {
      return 'text-green-500';
    }

    if (goal.additionalInfo && goal.additionalInfo.includes('ON TARGET')) {
      return 'text-green-500';
    }

    if (this.isOnTarget(goal)) {
      return 'text-green-500';
    }

    return 'text-red-500';
  }

  shouldShowCurrency(type: string): boolean {
    return type === 'NEW BUSINESS TARGET' || type === 'ANNUAL GWP TARGET';
  }

  getTargetBackground(goal: IPortfolioGoal): string {
    if (goal.type === 'PORTFOLIO LOSS RATIO TARGET') {
      return 'portfolio-loss-gradient';
    } else if (goal.type === 'RENEWAL RETENTION') {
      return 'renewal-retention-gradient';
    } else {
      return 'business-target-gradient';
    }
  }
}
