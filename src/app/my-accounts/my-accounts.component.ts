import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AccountsTableComponent } from "../accounts-table/accounts-table.component";

@Component({
  selector: 'app-my-accounts',
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.css'],
  standalone: true,
  imports: [CommonModule, AccountsTableComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyAccountsComponent {
  onFilterClick(): void {
  }


  onSortClick(): void {
  }

  onGroupClick(): void {
  }

  onNewClick(): void {
  }

  onSearchChange(event: Event): void {
  }
}