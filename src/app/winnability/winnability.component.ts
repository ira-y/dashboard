import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { HistoricalTrendComponent } from "../historical-trend/historical-trend.component";
import { PositionComponent } from "../position/position.component";
import { ScoreIndicatorComponent } from "../score-indicator/score-indicator.component";
import { IWinnabilityIndicator } from '../shared/interfaces/winnability.interface';
import { WidgetChartComponent } from "../widget-chart/widget-chart.component";
import { WinnabilityStatisticsComponent } from '../winnability-statistics/winnability-statistics.component';
import { AiRecommendationsComponent } from "../ai-recommendations/ai-recommendations.component";

@Component({
  selector: 'app-winnability',
  imports: [WidgetChartComponent, NgComponentOutlet, WinnabilityStatisticsComponent, AiRecommendationsComponent],
  templateUrl: './winnability.component.html',
  styleUrl: './winnability.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WinnabilityComponent {
    widgets = [
      {
        header: 'Overall Score',
        chart: 'scoreIndicator'
      },
      {
        header: 'Historical trend',
        chart: 'historicalTrend'
      },
      {
        header: 'Position',
        chart: 'position'
      }
    ];

    winnabilityStatistics: IWinnabilityIndicator[] = [
      {
        type: 'increasing',
        indicators: [
          {
            id: 1,
            label: 'Brokerage relationship',
            percentage: 28
          },
          {
            id: 2,
            label: 'Loss history',
            percentage: 22
          },
          {
            id: 3,
            label: 'Industry growth',
            percentage: 16
          },
          {
            id: 4,
            label: 'Multiline opportunity',
            percentage: 11
          }
        ]
      },
      {
        type: 'decreasing',
        indicators: [
          {
            id: 1,
            label: 'Premium pricing',
            percentage: -24
          },
          {
            id: 2,
            label: 'Total exposure',
            percentage: -18
          },
          {
            id: 3,
            label: 'Loss ratio trend',
            percentage: -13
          },
          {
            id: 4,
            label: 'Market competition',
            percentage: -5
          }
        ]
      }
    ];

    getComponent(componentName: string): Type<any> {
      const componentMap: Record<string, any> = {
        'scoreIndicator': ScoreIndicatorComponent,
        'historicalTrend': HistoricalTrendComponent,
        'position': PositionComponent
      };

      return componentMap[componentName];
    }
}
