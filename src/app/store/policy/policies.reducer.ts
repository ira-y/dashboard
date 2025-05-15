import { createReducer, on } from "@ngrx/store";
import { IPolicy } from "../../shared/interfaces/policy.interface";
import { createPolicy, createPolicyFailure, createPolicySuccess, deletePolicy, deletePolicyFailure, deletePolicySuccess, filterPolicies, isortPolicies, loadPolicies, loadPoliciesFailure, loadPoliciesSuccess, loadPolicyById, loadPolicyByIdFailure, loadPolicyByIdSuccess, renewPolicy, renewPolicyFailure, renewPolicySuccess, updatePolicy, updatePolicyFailure, updatePolicySuccess } from "./policies.actions";

export interface IPolicyState {
  items: IPolicy[];
  filteredItems: IPolicy[];
  selectedPolicy: IPolicy | null;
  activeFilter: string;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  loading: boolean;
  creatingPolicy: boolean;
  updatingPolicy: boolean;
  deletingPolicy: boolean;
  renewingPolicy: boolean;
  error: any;
}

export const initialState: IPolicyState = {
  items: [],
  filteredItems: [],
  selectedPolicy: null,
  activeFilter: 'all',
  sortBy: 'name',
  sortDirection: 'asc',
  loading: false,
  creatingPolicy: false,
  updatingPolicy: false,
  deletingPolicy: false,
  renewingPolicy: false,
  error: null
};

export const policiesReducer = createReducer(
  initialState,
  on(loadPolicies, state => ({
    ...state,
    loading: true
  })),
  on(loadPoliciesSuccess, (state, { items }) => {
    const sortedItems = sortPolicies(items, state.sortBy, state.sortDirection);
    const filteredItems = applyFilter(sortedItems, state.activeFilter);

    return {
      ...state,
      items: sortedItems,
      filteredItems,
      loading: false,
      error: null
    };
  }),
  on(loadPoliciesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(loadPolicyById, state => ({
    ...state,
    loading: true
  })),
  on(loadPolicyByIdSuccess, (state, { policy }) => ({
    ...state,
    selectedPolicy: policy,
    loading: false,
    error: null
  })),
  on(loadPolicyByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(createPolicy, state => ({
    ...state,
    creatingPolicy: true
  })),
  on(createPolicySuccess, (state, { policy }) => {
    const updatedItems = [...state.items, policy];
    const sortedItems = sortPolicies(updatedItems, state.sortBy, state.sortDirection);
    const filteredItems = applyFilter(sortedItems, state.activeFilter);

    return {
      ...state,
      items: sortedItems,
      filteredItems,
      creatingPolicy: false,
      error: null
    };
  }),
  on(createPolicyFailure, (state, { error }) => ({
    ...state,
    creatingPolicy: false,
    error
  })),
  on(updatePolicy, state => ({
    ...state,
    updatingPolicy: true
  })),
  on(updatePolicySuccess, (state, { policy }) => {
    const updatedItems = state.items.map(item => item.id === policy.id ? policy : item);
    const sortedItems = sortPolicies(updatedItems, state.sortBy, state.sortDirection);
    const filteredItems = applyFilter(sortedItems, state.activeFilter);

    return {
      ...state,
      items: sortedItems,
      filteredItems,
      selectedPolicy: policy.id === state.selectedPolicy?.id ? policy : state.selectedPolicy,
      updatingPolicy: false,
      error: null
    };
  }),
  on(updatePolicyFailure, (state, { error }) => ({
    ...state,
    updatingPolicy: false,
    error
  })),
  on(deletePolicy, state => ({
    ...state,
    deletingPolicy: true
  })),
  on(deletePolicySuccess, (state, { id }) => {
    const updatedItems = state.items.filter(item => item.id !== id);
    const filteredItems = applyFilter(updatedItems, state.activeFilter);

    return {
      ...state,
      items: updatedItems,
      filteredItems,
      selectedPolicy: state.selectedPolicy?.id === id ? null : state.selectedPolicy,
      deletingPolicy: false,
      error: null
    };
  }),
  on(deletePolicyFailure, (state, { error }) => ({
    ...state,
    deletingPolicy: false,
    error
  })),
  on(renewPolicy, state => ({
    ...state,
    renewingPolicy: true
  })),
  on(renewPolicySuccess, (state, { policy }) => {
    const updatedItems = state.items.map(item => item.id === policy.id ? policy : item);
    const sortedItems = sortPolicies(updatedItems, state.sortBy, state.sortDirection);
    const filteredItems = applyFilter(sortedItems, state.activeFilter);

    return {
      ...state,
      items: sortedItems,
      filteredItems,
      selectedPolicy: policy.id === state.selectedPolicy?.id ? policy : state.selectedPolicy,
      renewingPolicy: false,
      error: null
    };
  }),
  on(renewPolicyFailure, (state, { error }) => ({
    ...state,
    renewingPolicy: false,
    error
  })),
  on(filterPolicies, (state, { filter }) => ({
    ...state,
    activeFilter: filter,
    filteredItems: applyFilter(state.items, filter)
  })),
  on(isortPolicies, (state, { sortBy, sortDirection }) => {
    const sortedItems = sortPolicies(state.items, sortBy, sortDirection);
    const filteredItems = applyFilter(sortedItems, state.activeFilter);

    return {
      ...state,
      sortBy,
      sortDirection,
      items: sortedItems,
      filteredItems
    };
  })
);

function applyFilter(items: IPolicy[], filter: string): IPolicy[] {
  if (filter === 'all') {
    return items;
  } else if (filter === 'active') {
    return items.filter(item => item.status === 'Active');
  } else if (filter === 'pending') {
    return items.filter(item => item.status === 'Pending');
  } else {
    return items.filter(item => item.name.toLowerCase() === filter.toLowerCase());
  }
}

function sortPolicies(items: IPolicy[], sortBy: string, sortDirection: 'asc' | 'desc'): IPolicy[] {
  const sortedItems = [...items];

  sortedItems.sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'premium':
        comparison = (a.premium || 0) - (b.premium || 0);
        break;
      case 'effectiveDate':
        comparison = new Date(a.effectiveDate).getTime() - new Date(b.effectiveDate).getTime();
        break;
      case 'expiryDate':
        comparison = new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
        break;
      case 'status':
        comparison = a.status.localeCompare(b.status);
        break;
      case 'renewalChange':
        comparison = (a.renewalChange || 0) - (b.renewalChange || 0);
        break;
      default:
        comparison = a.name.localeCompare(b.name);
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  return sortedItems;
}