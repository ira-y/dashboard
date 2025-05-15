import { createAction, props } from "@ngrx/store";
import { IPolicy } from "../../shared/interfaces/policy.interface";

export const loadPolicies = createAction(
  '[Policies] Load Policies'
);

export const loadPoliciesSuccess = createAction(
  '[Policies] Load Policies Success',
  props<{ items: IPolicy[] }>()
);

export const loadPoliciesFailure = createAction(
  '[Policies] Load Policies Failure',
  props<{ error: any }>()
);

export const loadPolicyById = createAction(
  '[Policies] Load Policy By Id',
  props<{ id: string }>()
);

export const loadPolicyByIdSuccess = createAction(
  '[Policies] Load Policy By Id Success',
  props<{ policy: IPolicy }>()
);

export const loadPolicyByIdFailure = createAction(
  '[Policies] Load Policy By Id Failure',
  props<{ error: any }>()
);

export const createPolicy = createAction(
  '[Policies] Create Policy',
  props<{ policy: IPolicy }>()
);

export const createPolicySuccess = createAction(
  '[Policies] Create Policy Success',
  props<{ policy: IPolicy }>()
);

export const createPolicyFailure = createAction(
  '[Policies] Create Policy Failure',
  props<{ error: any }>()
);

export const updatePolicy = createAction(
  '[Policies] Update Policy',
  props<{ id: string; changes: Partial<IPolicy> }>()
);

export const updatePolicySuccess = createAction(
  '[Policies] Update Policy Success',
  props<{ policy: IPolicy }>()
);

export const updatePolicyFailure = createAction(
  '[Policies] Update Policy Failure',
  props<{ error: any }>()
);

export const deletePolicy = createAction(
  '[Policies] Delete Policy',
  props<{ id: string }>()
);

export const deletePolicySuccess = createAction(
  '[Policies] Delete Policy Success',
  props<{ id: string }>()
);

export const deletePolicyFailure = createAction(
  '[Policies] Delete Policy Failure',
  props<{ error: any }>()
);

export const renewPolicy = createAction(
  '[Policies] Renew Policy',
  props<{ id: string; renewalPremium: number; expiryDate: string }>()
);

export const renewPolicySuccess = createAction(
  '[Policies] Renew Policy Success',
  props<{ policy: IPolicy }>()
);

export const renewPolicyFailure = createAction(
  '[Policies] Renew Policy Failure',
  props<{ error: any }>()
);

export const filterPolicies = createAction(
  '[Policies] Filter Policies',
  props<{ filter: string }>()
);

export const isortPolicies = createAction(
  '[Policies] Sort Policies',
  props<{ sortBy: string; sortDirection: 'asc' | 'desc' }>()
);