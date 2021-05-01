import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Task } from '../models/task.interface';
import { TaskType, Priority, Status } from '../models/task.enum';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private subject = new Subject<any>();

  tasks: Array<Task>;

  constructor() {
    this.tasks = [
      {
        id: 1,
        title: 'create login page',
        description: 'create login page',
        type: TaskType.Story,
        priority: Priority.Medium,
        status: Status.ToDo,
      },
      {
        id: 2,
        title: 'create home page',
        description: 'create home page',
        type: TaskType.Improvement,
        priority: Priority.Major,
        status: Status.Done,
      },
      {
        id: 3,
        title: 'create manage page',
        description: 'create manage page',
        type: TaskType.Task,
        priority: Priority.Major,
        status: Status.InProgress,
      },
    ];
  }

  createOrEditTask(task) {
    if (task.id === undefined) {
      // create task
      const newTask = { ...task, id: uuidv4() };
      this.tasks.push(newTask);
    }
    if (task.id !== undefined) {
      // edit task
      const updatedTasks = this.tasks.map((item) => {
        if (item.id === task.id) {
          return task;
        }
        return item;
      });
      this.tasks = updatedTasks;
    }
    this.fetchTasks();
  }

  removeTask(task) {
    const updatedTasks = this.tasks.filter((item) => {
      return item.id !== task.id;
    });
    this.tasks = updatedTasks;
    this.fetchTasks();
  }

  fetchTasks() {
    this.subject.next(this.tasks);
  }

  getTasks(): Observable<any> {
    return this.subject.asObservable();
  }
}
