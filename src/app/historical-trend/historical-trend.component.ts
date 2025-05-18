import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historical-trend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historical-trend.component.html',
  styleUrls: ['./historical-trend.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoricalTrendComponent {
}