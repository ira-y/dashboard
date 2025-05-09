import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ITask } from "../interfaces/task.interface";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'mock-data';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${this.url}/tasks.json`);
  }

  getTaskById(id: string): Observable<ITask | null> {
    return this.getTasks()
      .pipe(
        map((tasks) => {
          const task = tasks.find(t => t.id === id);

          if (!task) {
            return null
          }

          return task;
        })
      );
  }
}