import { TaskType, Priority, Status } from './task.enum';

export interface Task {
  id: string | number;
  title: string;
  description?: string;
  type: TaskType;
  priority?: Priority;
  status: Status;
  date?: Date | string | number;
  humanizeDate?: string;
}
