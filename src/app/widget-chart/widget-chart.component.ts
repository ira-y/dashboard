import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetChartComponent {
  @Input() header: string = '';
}
