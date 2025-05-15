import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

interface ExposureItem {
  type: string;
  percentage: number;
  displayValue: string;
}

@Component({
  selector: 'app-exposure-distribution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exposure-distribution.component.html',
  styleUrls: ['./exposure-distribution.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExposureDistributionComponent implements OnInit {
  exposureData: ExposureItem[] = [];

  ngOnInit(): void {
    this.exposureData = [
      { type: 'Marine Cargo', percentage: 71.4, displayValue: '71.4%' },
      { type: 'General Liability', percentage: 20, displayValue: '20%' },
      { type: 'Workers Comp', percentage: 8.6, displayValue: '8.6%' }
    ];
  }
}
