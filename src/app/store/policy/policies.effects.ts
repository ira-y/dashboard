import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, of, switchMap } from "rxjs";
import { createPolicy, createPolicyFailure, createPolicySuccess, deletePolicy, deletePolicyFailure, deletePolicySuccess, loadPolicies, loadPoliciesFailure, loadPoliciesSuccess, loadPolicyById, loadPolicyByIdFailure, loadPolicyByIdSuccess, renewPolicy, renewPolicyFailure, renewPolicySuccess, updatePolicy, updatePolicyFailure, updatePolicySuccess } from "./policies.actions";
import { PoliciesService } from "../../shared/services/policies.service";

@Injectable()
export class PoliciesEffects {
  loadPolicies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPolicies),
      switchMap(() =>
        this.policiesService.getPolicies().pipe(
          map(policies => loadPoliciesSuccess({ items: policies })),
          catchError(error => of(loadPoliciesFailure({ error })))
        )
      )
    )
  );

  loadPolicyById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPolicyById),
      switchMap(({ id }) =>
        this.policiesService.getPolicyById(id).pipe(
          map(policy => loadPolicyByIdSuccess({ policy })),
          catchError(error => of(loadPolicyByIdFailure({ error })))
        )
      )
    )
  );

  createPolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPolicy),
      concatMap(({ policy }) =>
        this.policiesService.createPolicy(policy).pipe(
          map(newPolicy => createPolicySuccess({ policy: newPolicy })),
          catchError(error => of(createPolicyFailure({ error })))
        )
      )
    )
  );

  updatePolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePolicy),
      concatMap(({ id, changes }) =>
        this.policiesService.updatePolicy(id, changes).pipe(
          map(updatedPolicy => updatePolicySuccess({ policy: updatedPolicy })),
          catchError(error => of(updatePolicyFailure({ error })))
        )
      )
    )
  );

  deletePolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePolicy),
      mergeMap(({ id }) =>
        this.policiesService.deletePolicy(id).pipe(
          map(() => deletePolicySuccess({ id })),
          catchError(error => of(deletePolicyFailure({ error })))
        )
      )
    )
  );

  renewPolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(renewPolicy),
      concatMap(({ id, renewalPremium, expiryDate }) =>
        this.policiesService.renewPolicy(id, renewalPremium, expiryDate).pipe(
          map(updatedPolicy => renewPolicySuccess({ policy: updatedPolicy })),
          catchError(error => of(renewPolicyFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private policiesService: PoliciesService
  ) {}
}