import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { IAccount } from "../shared/interfaces/account.interface";
import { AccountsService } from "../shared/services/accounts.service";

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsTableComponent implements OnInit {
  accounts: IAccount[] = [];
  loading = false;
  error: string | null = null;

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.loading = true;
    this.error = null;

    this.accountsService.getAccounts().subscribe({
      next: (accounts) => {
        this.accounts = accounts;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load accounts', err);
        this.error = 'Failed to load accounts. Please try again later.';
        this.loading = false;
      }
    });
  }

  getLossRatioBadgeClass(lossRatio: number): string {
    if (lossRatio <= 30) {
      return 'loss-ratio-green';
    } else if (lossRatio <= 50) {
      return 'loss-ratio-yellow';
    } else {
      return 'loss-ratio-red';
    }
  }

  getAppetiteBadgeClass(appetite: string): string {
    switch (appetite) {
      case 'HIGH':
        return 'appetite-high';
      case 'MEDIUM':
        return 'appetite-medium';
      case 'CAUTIOUS':
        return 'appetite-cautious';
      default:
        return 'appetite-medium';
    }
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'Under review':
        return 'status-review';
      default:
        return '';
    }
  }

  getStatusDotClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'status-dot-active';
      case 'Under review':
        return 'status-dot-review';
      default:
        return '';
    }
  }

  getDotFilled(winnability: string, dotIndex: number): boolean {
    switch (winnability) {
      case 'Very Strong':
        return dotIndex <= 4;
      case 'Strong':
        return dotIndex <= 3;
      case 'Medium':
        return dotIndex <= 2;
      default:
        return false;
    }
  }
}