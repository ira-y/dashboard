import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { getUser } from './store/user/user.actions';

@Component({
    selector: 'app-root',
    imports: [
    RouterOutlet,
    HeaderComponent,
    NavigationComponent
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.store.dispatch(getUser());
  }
}
