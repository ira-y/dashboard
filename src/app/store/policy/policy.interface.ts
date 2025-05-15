import { IPolicy } from "../../shared/interfaces/policy.interface";

export interface IPolicyState {
  items: IPolicy[];
  loading: boolean;
  error: any;
  filteredItems: any;
  selectedPolicy: any;
  creatingPolicy: any;
  updatingPolicy: any;
  deletingPolicy: number;
  renewingPolicy: any;
  activeFilter: any;
  sortBy: any;
  sortDirection: any;
}