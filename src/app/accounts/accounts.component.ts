import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderAccountsCompoinent } from "../header-accounts/header-accounts.component";
import { InfoAccountsComponent } from "../info-accounts/info-accounts.component";
import { NeedsAttentionComponent } from "../needs-attention/needs-attention.component";
import { PerformanceMetricsComponent } from "../performance-metrics/performance-metrics.component";

@Component({
  selector: 'app-accounts',
  imports: [InfoAccountsComponent, NeedsAttentionComponent, HeaderAccountsCompoinent, PerformanceMetricsComponent],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsComponent {

}
