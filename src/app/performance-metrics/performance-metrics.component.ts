import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExposureDistributionComponent } from "../exposure-distribution/exposure-distribution.component";
import { IWidget } from '../shared/interfaces/widget.interface';
import { WidgetChartComponent } from "../widget-chart/widget-chart.component";
import { WidgetComponent } from "../widget/widget.component";

@Component({
  selector: 'app-performance-metrics',
  imports: [WidgetComponent, WidgetChartComponent, ExposureDistributionComponent],
  templateUrl: './performance-metrics.component.html',
  styleUrl: './performance-metrics.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceMetricsComponent {
  performanceWidgets: IWidget[] = [
    {
      header: 'Winnability',
      dots: 4,
      description: 'Very Strong',
      linkText: 'See all factors'
    },
    {
      header: 'Loss Ratio',
      description: '25%',
      descriptionLabel: 'vs 42% target',
      linkText: 'View history'
    },
    {
      header: 'Premium Growth',
      description: '12.4%',
      descriptionLabel: 'YoY increase',
      subtitle: '$123M vs $150M Target',
      linkText: 'View trend'
    }
  ];
}
