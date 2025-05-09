import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPortfolioGoal } from "../interfaces/portfolio-goal.interface";

@Injectable({
  providedIn: 'root'
})
export class PortfolioGoalsService {
  private url = 'mock-data';

  constructor(private http: HttpClient) {}

  getPortfolioGoals(): Observable<IPortfolioGoal[]> {
    return this.http.get<IPortfolioGoal[]>(`${this.url}/portfolio-goals.json`);
  }
}