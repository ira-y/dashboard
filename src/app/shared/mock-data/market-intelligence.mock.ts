import { IMarketIntelligence } from "../interfaces/market-intelligence.interface";

export const MARKET_INTELLIGENCE_MOCK: IMarketIntelligence[] = [
  {
    id: '1',
    title: 'Rate hardening in Cyber market',
    description: '+15% YoY',
    type: 'rate-hardening',
    indicator: 'red'
  },
  {
    id: '2',
    title: 'New capacity entering Marine market',
    description: '',
    type: 'new-capacity',
    indicator: 'yellow'
  },
  {
    id: '3',
    title: 'Environmental regulatory changes in CA',
    description: '',
    type: 'regulatory-changes',
    indicator: 'blue'
  }
];