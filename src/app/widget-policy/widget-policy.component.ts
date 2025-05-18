import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-policy',
  imports: [CommonModule],
  templateUrl: './widget-policy.component.html',
  styleUrl: './widget-policy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetPolicyComponent {
  @Input() logoName = '';
  @Input() title = '';
  @Input() premium = 0;
  @Input() effDate = '---';
}
