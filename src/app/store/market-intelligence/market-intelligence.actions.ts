import { createAction, props } from "@ngrx/store";
import { IMarketIntelligence } from "../../shared/interfaces/market-intelligence.interface";

export const loadMarketIntelligence = createAction(
  '[Market Intelligence] Load Market Intelligence'
);

export const loadMarketIntelligenceSuccess = createAction(
  '[Market Intelligence] Load Market Intelligence Success',
  props<{ items: IMarketIntelligence[] }>()
);

export const loadMarketIntelligenceFailure = createAction(
  '[Market Intelligence] Load Market Intelligence Failure',
  props<{ error: any }>()
);

export const addMarketIntelligence = createAction(
  '[Market Intelligence] Add Market Intelligence',
  props<{ item: IMarketIntelligence }>()
);

export const addMarketIntelligenceSuccess = createAction(
  '[Market Intelligence] Add Market Intelligence Success',
  props<{ item: IMarketIntelligence }>()
);

export const addMarketIntelligenceFailure = createAction(
  '[Market Intelligence] Add Market Intelligence Failure',
  props<{ error: any }>()
);

export const updateMarketIntelligence = createAction(
  '[Market Intelligence] Update Market Intelligence',
  props<{ id: string; changes: Partial<IMarketIntelligence> }>()
);

export const updateMarketIntelligenceSuccess = createAction(
  '[Market Intelligence] Update Market Intelligence Success',
  props<{ item: IMarketIntelligence }>()
);

export const updateMarketIntelligenceFailure = createAction(
  '[Market Intelligence] Update Market Intelligence Failure',
  props<{ error: any }>()
);

export const deleteMarketIntelligence = createAction(
  '[Market Intelligence] Delete Market Intelligence',
  props<{ id: string }>()
);

export const deleteMarketIntelligenceSuccess = createAction(
  '[Market Intelligence] Delete Market Intelligence Success',
  props<{ id: string }>()
);

export const deleteMarketIntelligenceFailure = createAction(
  '[Market Intelligence] Delete Market Intelligence Failure',
  props<{ error: any }>()
);

export const filterMarketIntelligence = createAction(
  '[Market Intelligence] Filter Market Intelligence',
  props<{ filter: string }>()
);