import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-accounts',
  imports: [CommonModule],
  templateUrl: './header-accounts.component.html',
  styleUrls: ['./header-accounts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderAccountsCompoinent{
}