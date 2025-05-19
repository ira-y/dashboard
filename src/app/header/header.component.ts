import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn, selectUserInitials, selectUserName } from '../store/user/user.selectors';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  userInitials$ = this.store.select(selectUserInitials);
  userName$ = this.store.select(selectUserName);
  isLoggedIn$ = this.store.select(selectIsLoggedIn);

  taskCount: number = 12;

  constructor(private store: Store) { }
}