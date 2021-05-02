import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Task } from '../models/task.interface';
import { humanizeDate } from '../utils/date-utils';
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
        description:
          'login - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: TaskType.Story,
        priority: Priority.Medium,
        status: Status.ToDo,
        date: new Date(),
        humanizeDate: humanizeDate(new Date()),
      },
      {
        id: 2,
        title: 'create home page',
        description:
          'home - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: TaskType.Improvement,
        priority: Priority.Major,
        status: Status.Done,
        date: new Date(),
        humanizeDate: humanizeDate(new Date()),
      },
      {
        id: 3,
        title: 'create manage page',
        description:
          'manage - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: TaskType.Task,
        priority: Priority.Major,
        status: Status.InProgress,
        date: new Date(),
        humanizeDate: humanizeDate(new Date()),
      },
      {
        id: 4,
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: TaskType.Research,
        priority: Priority.Critical,
        status: Status.InReview,
        date: new Date(),
        humanizeDate: humanizeDate(new Date()),
      },
    ];
  }

  createOrEditTask(task) {
    if (task.id === undefined) {
      // create task
      const newTask = {
        ...task,
        id: uuidv4(),
        date: new Date(),
        humanizeDate: humanizeDate(new Date()),
      };
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
