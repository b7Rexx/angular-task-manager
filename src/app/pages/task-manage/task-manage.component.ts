import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/models/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-manage',
  templateUrl: './task-manage.component.html',
  styleUrls: ['./task-manage.component.scss'],
})
export class TaskManageComponent implements OnInit {
  taskList: Array<Task>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskList = this.taskService.tasks;
  }
}
