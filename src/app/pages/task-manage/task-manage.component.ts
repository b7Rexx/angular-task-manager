import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Status } from 'src/app/models/task.enum';
import { Task } from 'src/app/models/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-manage',
  templateUrl: './task-manage.component.html',
  styleUrls: ['./task-manage.component.scss'],
})
export class TaskManageComponent implements OnInit, OnDestroy {
  taskList: Array<Task>;
  taskStatus = {
    0: Status.ToDo,
    1: Status.InProgress,
    2: Status.InReview,
    3: Status.QA,
    4: Status.Verified,
    5: Status.Done,
  };

  taskSubscription: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskSubscription = this.taskService.getTasks().subscribe((tasks) => {
      this.taskList = tasks;
    });
    this.taskService.fetchTasks();
  }

  ngOnDestroy(): void {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }
}
