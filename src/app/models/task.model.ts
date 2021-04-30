export interface Task {
  id: string | number;
  title: string;
  description?: string;
  type: TaskType;
  priority?: Priority;
  status: Status;
}

export enum TaskType {
  Bug,
  Improvement,
  Research,
  Task,
  Story,
}

export enum Priority {
  Critical,
  Major,
  Medium,
  Minor,
}

export enum Status {
  ToDo,
  InProgress,
  InReview,
  QA,
  Verified,
  Done,
}
