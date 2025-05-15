export interface IMarketIntelligence {
  id: string;
  title: string;
  description: string;
  type: 'rate-hardening' | 'new-capacity' | 'regulatory-changes';
  indicator: string;
}