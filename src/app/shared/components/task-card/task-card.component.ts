import { Component, OnInit, Input, Output } from '@angular/core';

import { Task } from 'src/app/models/task.interface';
import { TaskType } from 'src/app/models/task.enum';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
  @Input('task') task: Task;

  taskType = TaskType;

  constructor() {
    console.log('asdasd > ', this.taskType);
  }

  ngOnInit(): void {}
}
