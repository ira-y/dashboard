import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IIndicatorItem, IndicatorType } from '../shared/interfaces/winnability.interface';

@Component({
  selector: 'app-winnability-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './winnability-statistics.component.html',
  styleUrl: './winnability-statistics.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WinnabilityStatisticsComponent {
  @Input() type: IndicatorType = 'increasing';
  @Input() indicators: IIndicatorItem[] = [];

  get title(): string {
    return `${this.type === 'increasing' ? 'Increasing' : 'Decreasing'} Winnability`;
  }

  get indicatorClass(): string {
    return this.type === 'increasing' ? 'increasing' : 'decreasing';
  }

  get arrowDirection(): string {
    return this.type === 'increasing' ? 'up' : 'down';
  }

  getPercentageDisplay(percentage: number): string {
    const prefix = this.type === 'increasing' ? '+' : '-';
    return `${prefix}${Math.abs(percentage)}%`;
  }

  getProgressBarStyle(percentage: number): string {
    return `${Math.abs(percentage) * 5}px`;
    // return `width: ${Math.abs(percentage)}px`;
  }
}