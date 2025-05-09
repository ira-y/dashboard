import { ITask } from "../../shared/interfaces/task.interface";

export interface ITaskState {
  tasks: ITask[];
  activeTask: ITask | null;
}