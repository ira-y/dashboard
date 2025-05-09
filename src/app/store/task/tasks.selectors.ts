import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITaskState } from "./task.interface";

export const selectTasksState = createFeatureSelector<ITaskState>('tasks');

export const selectAllTasks = createSelector(
  selectTasksState,
  state => state.tasks
);

export const selectActiveTask = createSelector(
  selectTasksState,
  state => state.activeTask
);
