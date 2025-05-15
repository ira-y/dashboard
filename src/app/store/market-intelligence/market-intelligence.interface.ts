import { IMarketIntelligence } from "../../shared/interfaces/market-intelligence.interface";

export interface IMarketIntelligenceState {
  items: IMarketIntelligence[];
  loading: boolean;
  error: any;
  filteredItems: any;
  addingItem: any;
  updatingItem: any;
  deletingItem: any;
  activeFilter: any;
}