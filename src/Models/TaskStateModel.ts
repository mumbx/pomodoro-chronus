import type { TaskModel } from './TaskModel';
import type { TaskType } from './TaskType';


export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: Record<TaskType, number>;
};