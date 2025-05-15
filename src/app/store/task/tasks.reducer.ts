import { createReducer, on } from "@ngrx/store";
import { ITaskState } from "./task.interface";
import { loadTaskByIdSuccess, loadTasksSuccess } from "./tasks.actions";

export const initialState: ITaskState = {
  tasks: [],
  activeTask: null
};

export const tasksReducer = createReducer(
  initialState,
  on(loadTasksSuccess, (state, { tasks }) => {
    return {
      ...state,
      tasks
    };
  }),
  on(loadTaskByIdSuccess, (state, { task }) => ({
    ...state,
    selectedTask: task
  })),
);
