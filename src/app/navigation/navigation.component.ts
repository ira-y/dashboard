import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  active?: boolean;
}

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild('navItemsContainer') navItemsContainer!: ElementRef;

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'home', route: '/dashboard', active: true },
    { label: 'Accounts', icon: 'document', route: '/accounts' },
    { label: 'Brokers', icon: 'users', route: '/brokers' },
    { label: 'Submissions', icon: 'folder', route: '/submissions' },
    { label: 'Organizations', icon: 'building', route: '/organizations' },
    { label: 'Goals & Rules', icon: 'flag', route: '/goals-rules' },
    { label: 'Admin', icon: 'cog', route: '/admin' },
    { label: 'Admin', icon: 'cog', route: '/admin2' },
    { label: 'Admin', icon: 'cog', route: '/admin3' },
    { label: 'Admin', icon: 'cog', route: '/admin4' },
    { label: 'Admin', icon: 'cog', route: '/admin5' },
    { label: 'Admin', icon: 'cog', route: '/admin6' },
    { label: 'Admin', icon: 'cog', route: '/admin7' },
    { label: 'Admin', icon: 'cog', route: '/admin8' },
    { label: 'Admin', icon: 'cog', route: '/admin9' }
  ];

  ngAfterViewInit() {
    this.checkScrollButtons();
  }

  setActive(item: NavItem): void {
    this.navItems.forEach(navItem => navItem.active = false);
    item.active = true;
  }

  checkScrollButtons(): void {
    const container = this.navItemsContainer.nativeElement;
    const hasHorizontalScroll = container.scrollWidth > container.clientWidth;
  }

  scrollLeft(): void {
    const container = this.navItemsContainer.nativeElement;
    container.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight(): void {
    const container = this.navItemsContainer.nativeElement;
    container.scrollBy({ left: 200, behavior: 'smooth' });
  }
}