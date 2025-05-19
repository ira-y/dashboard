import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Policy {
  icon: string;
  iconColor: string;
  name: string;
  id: string;
  effDate: string;
  expDate: string;
  status: 'Active' | 'Pending';
  expiringTech: string;
  expiringPremium: string;
  renewalToTech: string;
  renewalTech: string;
  renewalPremium: string;
  rateChange: string;
  rateChangeColor: string;
  lossRatio: string;
  lossRatioValue: number;
  lossRatioColor: string;
}

@Component({
  selector: 'app-policies-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './policies-table.component.html',
  styleUrls: ['./policies-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoliciesTableComponent {
  policies: Policy[] = [
    {
      icon: 'B',
      iconColor: '#4b7bec',
      name: 'Marine Cargo',
      id: '17030212',
      effDate: '6/30/2026',
      expDate: '6/30/2027',
      status: 'Active',
      expiringTech: '$587,500',
      expiringPremium: '$605,000',
      renewalToTech: '$610,000',
      renewalTech: '$620,000',
      renewalPremium: '$625,000',
      rateChange: '3.3%',
      rateChangeColor: 'green',
      lossRatio: '22%',
      lossRatioValue: 22,
      lossRatioColor: 'green'
    },
    {
      icon: 'G',
      iconColor: '#26de81',
      name: 'General Liability',
      id: '4631092',
      effDate: '6/30/2026',
      expDate: '6/30/2027',
      status: 'Active',
      expiringTech: '$160,000',
      expiringPremium: '$165,000',
      renewalToTech: '$170,000',
      renewalTech: '$172,500',
      renewalPremium: '$175,000',
      rateChange: '6.1%',
      rateChangeColor: 'red',
      lossRatio: '55%',
      lossRatioValue: 55,
      lossRatioColor: 'yellow'
    },
    {
      icon: 'W',
      iconColor: '#a55eea',
      name: 'Workers Comp',
      id: '9182371',
      effDate: 'Pending',
      expDate: 'Pending',
      status: 'Pending',
      expiringTech: '$0',
      expiringPremium: '$0',
      renewalToTech: '$73,500',
      renewalTech: '$75,000',
      renewalPremium: '$75,000',
      rateChange: 'N/A',
      rateChangeColor: 'gray',
      lossRatio: 'N/A',
      lossRatioValue: 0,
      lossRatioColor: 'gray'
    },
    {
      icon: 'U',
      iconColor: '#eb3b5a',
      name: 'Umbrella',
      id: '5274936',
      effDate: '13/03/2026',
      expDate: '13/03/2027',
      status: 'Active',
      expiringTech: '$245,000',
      expiringPremium: '$250,000',
      renewalToTech: '$267,500',
      renewalTech: '$270,000',
      renewalPremium: '$275,000',
      rateChange: '10.0%',
      rateChangeColor: 'red',
      lossRatio: '78%',
      lossRatioValue: 78,
      lossRatioColor: 'red'
    }
  ];

  // Рассчитываем итоги
  getTotals() {
    return {
      count: this.policies.length,
      expiringTech: '$992,500',
      expiringPremium: '$1,020,000',
      renewalToTech: '$1,121,000',
      renewalTech: '$1,137,500',
      renewalPremium: '$1,150,000',
      rateChange: '6.9%',
      lossRatio: '58.3%'
    };
  }
}