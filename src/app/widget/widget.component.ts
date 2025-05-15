import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  imports: [CommonModule],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetComponent {
  @Input() header = '';
  @Input() dots = 0;
  @Input() description = '';
  @Input() descriptionLabel = '';
  @Input() subtitle = '';
  @Input() linkText = '';

  get maxDots(): number[] {
    return Array(this.dots).fill(0);
  }
}
