import { Injectable } from "@angular/core";
import { IMarketIntelligence } from "../interfaces/market-intelligence.interface";
import { Observable, of } from "rxjs";
import { MARKET_INTELLIGENCE_MOCK } from "../mock-data/market-intelligence.mock";

@Injectable({
  providedIn: 'root'
})
export class IMarketIntelligenceService {
  private items: IMarketIntelligence[] = [...MARKET_INTELLIGENCE_MOCK];

  getMarketIntelligence(): Observable<IMarketIntelligence[]> {
    return of([...this.items]);
  }

  addMarketIntelligence(item: IMarketIntelligence): Observable<IMarketIntelligence> {
    const newItem: IMarketIntelligence = {
      ...item,
      id: Date.now().toString() 
    };
    
    this.items.push(newItem);
    
    return of(newItem);
  }

  updateMarketIntelligence(id: string, changes: Partial<IMarketIntelligence>): Observable<IMarketIntelligence> {
    const index = this.items.findIndex(item => item.id === id);
    
    if (index === -1) {
      throw new Error('Item not found');
    }
    
    const updatedItem: IMarketIntelligence = {
      ...this.items[index],
      ...changes
    };
    
    this.items[index] = updatedItem;
    
    return of(updatedItem);
  }

  deleteMarketIntelligence(id: string): Observable<void> {
    const index = this.items.findIndex(item => item.id === id);
    
    if (index === -1) {
      throw new Error('Item not found');
    }
    
    this.items.splice(index, 1);
    
    return of(void 0);
  }
}