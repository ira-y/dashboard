import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface StatusStep {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-account-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-status.component.html',
  styleUrls: ['./account-status.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountStatusComponent {
}
