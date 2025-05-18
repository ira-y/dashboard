import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountDetailsComponent } from "../account-details/account-details.component";
import { AccountStatusComponent } from "../account-status/account-status.component";
import { ComplianceDocumentationComponent } from "../compliance-documentation/compliance-documentation.component";
import { HeaderAccountsCompoinent } from "../header-accounts/header-accounts.component";
import { InfoAccountsComponent } from "../info-accounts/info-accounts.component";
import { NeedsAttentionComponent } from "../needs-attention/needs-attention.component";
import { PerformanceMetricsComponent } from "../performance-metrics/performance-metrics.component";
import { PoliciasComponent } from "../policies/policies.component";

@Component({
  selector: 'app-accounts',
  imports: [InfoAccountsComponent, NeedsAttentionComponent, HeaderAccountsCompoinent, PerformanceMetricsComponent, PoliciasComponent, AccountStatusComponent, ComplianceDocumentationComponent, AccountDetailsComponent],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsComponent {

}
