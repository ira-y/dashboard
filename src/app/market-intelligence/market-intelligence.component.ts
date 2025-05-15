import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-market-intelligence',
  templateUrl: './market-intelligence.component.html',
  styleUrls: ['./market-intelligence.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketIntelligenceComponent {
  // Компонент не требует сложной логики, так как данные захардкожены в шаблоне
}