import { ChangeDetectionStrategy, Component } from "@angular/core";
import { IWidgetPolicy } from "../shared/interfaces/widget-policy.interface";
import { WidgetPolicyComponent } from "../widget-policy/widget-policy.component";

@Component({
  selector: 'app-policies-component',
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css',
  imports: [WidgetPolicyComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoliciasComponent {
  performanceWidgets: IWidgetPolicy[] = [
    {
      logoName: 'yacht',
      title: 'Marine Cargo',
      premium: 625000,
      effDate: '6/30/2026',
    },
    {
      logoName: 'completed',
      title: 'General Liability',
      premium: 175000,
      effDate: '6/30/2026'
    },
    {
      logoName: 'profile',
      title: 'Workers Copm',
      premium: 75000,
    },
    {
      logoName: 'building',
      title: 'Prorerty',
      premium: 64829.83,
    },
    {
      logoName: 'umbrella',
      title: 'Umbrella',
      premium: 275000,
      effDate: '13/03/2026'
    }
  ];
}
