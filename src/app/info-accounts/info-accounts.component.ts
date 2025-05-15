import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-info-accounts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info-accounts.component.html',
  styleUrls: ['./info-accounts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoAccountsComponent {
}