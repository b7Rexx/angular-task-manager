import { Injectable } from '@angular/core';

import { Task, TaskType, Priority, Status } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  _tasks: Array<Task>;

  constructor() {
    this._tasks = [
      {
        id: 0,
        title: 'create login page',
        description: 'create login page',
        type: TaskType.Improvement,
        priority: Priority.Medium,
        status: Status.ToDo,
      },
      {
        id: 1,
        title: 'create home page',
        description: 'create home page',
        type: TaskType.Improvement,
        priority: Priority.Major,
        status: Status.InProgress,
      },
    ];
  }

  get tasks() {
    return this._tasks;
  }

  set tasks(task) {
    this._tasks = task;
  }
}
