import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WinnabilityComponent } from "../winnability/winnability.component";

interface NavItem {
  title: string;
  route: string;
  active: boolean;
}

@Component({
  selector: 'app-account-details',
  imports: [CommonModule, RouterLink, WinnabilityComponent],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountDetailsComponent {
  currentStep = 0;

  navItems: NavItem[] = [
    {
      title: 'Winnability',
      route: '/winnability',
      active: true
    },
    {
      title: 'Exposure Review & Suggested Coverage',
      route: '/exposure-review',
      active: false
    },
    {
      title: 'Portfolio Strategy Alignment',
      route: '/portfolio-strategy',
      active: false
    },
    {
      title: 'Broker Analytics',
      route: '/broker-analytics',
      active: false
    }
  ];

  setActive(index: number): void {
    this.navItems[this.currentStep].active = false;
    this.currentStep = index;
    this.navItems[index].active = true;
  }
}
