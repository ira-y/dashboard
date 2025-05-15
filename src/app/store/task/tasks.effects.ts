import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { TaskService } from "../../shared/services/task.service";
import { loadTaskById, loadTaskByIdFailure, loadTaskByIdSuccess, loadTasks, loadTasksFailure, loadTasksSuccess } from "./tasks.actions";

@Injectable()
export class TasksEffects {
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      switchMap(() =>
        this.taskService.getTasks().pipe(
          map(tasks => loadTasksSuccess({ tasks })),
          catchError(() => of(loadTasksFailure()))
        )
      )
    )
  );

  loadTaskById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTaskById),
      switchMap(({ id }) =>
        this.taskService.getTaskById(id).pipe(
          map(task => loadTaskByIdSuccess({ task })),
          catchError(() => of(loadTaskByIdFailure()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}
}
