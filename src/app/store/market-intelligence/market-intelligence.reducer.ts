import { createReducer, on } from "@ngrx/store";
import { IMarketIntelligence } from "../../shared/interfaces/market-intelligence.interface";
import { addMarketIntelligence, addMarketIntelligenceFailure, addMarketIntelligenceSuccess, deleteMarketIntelligence, deleteMarketIntelligenceFailure, deleteMarketIntelligenceSuccess, filterMarketIntelligence, loadMarketIntelligence, loadMarketIntelligenceFailure, loadMarketIntelligenceSuccess, updateMarketIntelligence, updateMarketIntelligenceFailure, updateMarketIntelligenceSuccess } from "./market-intelligence.actions";

export interface MarketIntelligenceState {
  items: IMarketIntelligence[];
  filteredItems: IMarketIntelligence[];
  activeFilter: string;
  loading: boolean;
  error: any;
  addingItem: boolean;
  updatingItem: boolean;
  deletingItem: boolean;
}

export const initialState: MarketIntelligenceState = {
  items: [],
  filteredItems: [],
  activeFilter: 'all',
  loading: false,
  error: null,
  addingItem: false,
  updatingItem: false,
  deletingItem: false
};

export const marketIntelligenceReducer = createReducer(
  initialState,
  on(loadMarketIntelligence, state => ({
    ...state,
    loading: true
  })),
  on(loadMarketIntelligenceSuccess, (state, { items }) => ({
    ...state,
    items,
    filteredItems: applyFilter(items, state.activeFilter),
    loading: false,
    error: null
  })),
  on(loadMarketIntelligenceFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(addMarketIntelligence, state => ({
    ...state,
    addingItem: true
  })),
  on(addMarketIntelligenceSuccess, (state, { item }) => {
    const updatedItems = [...state.items, item];
    return {
      ...state,
      items: updatedItems,
      filteredItems: applyFilter(updatedItems, state.activeFilter),
      addingItem: false,
      error: null
    };
  }),
  on(addMarketIntelligenceFailure, (state, { error }) => ({
    ...state,
    addingItem: false,
    error
  })),
  on(updateMarketIntelligence, state => ({
    ...state,
    updatingItem: true
  })),
  on(updateMarketIntelligenceSuccess, (state, { item }) => {
    const updatedItems = state.items.map(i => i.id === item.id ? item : i);
    return {
      ...state,
      items: updatedItems,
      filteredItems: applyFilter(updatedItems, state.activeFilter),
      updatingItem: false,
      error: null
    };
  }),
  on(updateMarketIntelligenceFailure, (state, { error }) => ({
    ...state,
    updatingItem: false,
    error
  })),
  on(deleteMarketIntelligence, state => ({
    ...state,
    deletingItem: true
  })),
  on(deleteMarketIntelligenceSuccess, (state, { id }) => {
    const updatedItems = state.items.filter(item => item.id !== id);
    return {
      ...state,
      items: updatedItems,
      filteredItems: applyFilter(updatedItems, state.activeFilter),
      deletingItem: false,
      error: null
    };
  }),
  on(deleteMarketIntelligenceFailure, (state, { error }) => ({
    ...state,
    deletingItem: false,
    error
  })),
  on(filterMarketIntelligence, (state, { filter }) => ({
    ...state,
    activeFilter: filter,
    filteredItems: applyFilter(state.items, filter)
  }))
);

function applyFilter(items: IMarketIntelligence[], filter: string): IMarketIntelligence[] {
  if (filter === 'all') {
    return items;
  }
  return items.filter(item => item.type === filter);
}