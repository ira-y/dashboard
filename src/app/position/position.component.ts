import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ExposureItem {
  type: string;
  percentage: number;
  displayValue: string;
}

@Component({
  selector: 'app-position',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PositionComponent {
  positionData: ExposureItem[] = [
      { type: 'Your score', percentage: 82, displayValue: '82%' },
      { type: 'Market Avg', percentage: 68, displayValue: '68%' },
      { type: 'Top competitor', percentage: 88, displayValue: '88%' }
    ];
}
