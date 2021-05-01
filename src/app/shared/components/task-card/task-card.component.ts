import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from 'src/app/models/task.interface';
import { TaskType, Status } from 'src/app/models/task.enum';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
  @Input('task') task: Task;
  @Output('clickHandler') clickHandler = new EventEmitter();

  taskType = TaskType;
  taskStatus = Status;

  constructor() {}

  ngOnInit(): void {}
}
