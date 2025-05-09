import { createAction, props } from "@ngrx/store";
import { ITask } from "../../shared/interfaces/task.interface";

export const loadTasks = createAction(
  '[Tasks] Load Tasks'
);

export const loadTasksSuccess = createAction(
  '[Tasks] Load Tasks Success',
  props<{ tasks: ITask[] }>()
);

export const loadTasksFailure = createAction(
  '[Tasks] Load Tasks Failure'
);

export const loadTaskById = createAction(
  '[Tasks] Load ITask By Id',
  props<{ id: string }>()
);

export const loadTaskByIdSuccess = createAction(
  '[Tasks] Load ITask By Id Success',
  props<{ task: ITask | null }>()
);

export const loadTaskByIdFailure = createAction(
  '[Tasks] Load ITask By Id Failure'
);
