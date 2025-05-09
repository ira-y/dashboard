import { Injectable } from "@angular/core";
import { IPolicy } from "../interfaces/policy.interface";
import { Observable, of, throwError } from "rxjs";
import { MARITIME_LOGISTICS_POLICIES_MOCK } from "../mock-data/maritime-logistics-policies.mock";

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {
  private policies: IPolicy[] = [...MARITIME_LOGISTICS_POLICIES_MOCK];

  getPolicies(): Observable<IPolicy[]> {
    return of([...this.policies]);
  }

  getPolicyById(id: string): Observable<IPolicy> {
    const policy = this.policies.find(p => p.id === id);
    
    if (!policy) {
      return throwError(() => new Error('Policy not found'));
    }
    
    return of({...policy});
  }

  createPolicy(policy: IPolicy): Observable<IPolicy> {
    const newPolicy: IPolicy = {
      ...policy,
      id: Date.now().toString()
    };
    
    this.policies.push(newPolicy);
    
    return of(newPolicy);
  }

  updatePolicy(id: string, changes: Partial<IPolicy>): Observable<IPolicy> {
    const index = this.policies.findIndex(p => p.id === id);
    
    if (index === -1) {
      return throwError(() => new Error('Policy not found'));
    }
    
    const updatedPolicy: IPolicy = {
      ...this.policies[index],
      ...changes
    };
    
    this.policies[index] = updatedPolicy;
    
    return of(updatedPolicy);
  }

  deletePolicy(id: string): Observable<void> {
    const index = this.policies.findIndex(p => p.id === id);
    
    if (index === -1) {
      return throwError(() => new Error('Policy not found'));
    }
    
    this.policies.splice(index, 1);
    
    return of(void 0);
  }

  renewPolicy(id: string, renewalPremium: number, expiryDate: string): Observable<IPolicy> {
    const index = this.policies.findIndex(p => p.id === id);
    
    if (index === -1) {
      return throwError(() => new Error('Policy not found'));
    }
    
    const policy = this.policies[index];
    const currentPremium = policy.premium || 0;
    const renewalChange = renewalPremium > 0 
      ? Math.round((renewalPremium - currentPremium) / currentPremium * 100 * 10) / 10
      : 0;
    
    const updatedPolicy: IPolicy = {
      ...policy,
      originalPremium: policy.premium,
      currentPremium: policy.premium,
      renewalPremium,
      renewalChange,
      effectiveDate: policy.expiryDate, // Current expiry becomes new effective date
      expiryDate,
      status: 'Active'
    };
    
    this.policies[index] = updatedPolicy;
    
    return of(updatedPolicy);
  }
}