import { Component, OnInit, Input } from '@angular/core';

import { Status } from 'src/app/models/task.enum';
import { Task } from 'src/app/models/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-manage-status',
  templateUrl: './manage-status.component.html',
  styleUrls: ['./manage-status.component.scss'],
})
export class ManageStatusComponent implements OnInit {
  @Input('taskList') taskList: Array<Task>;
  @Input('status') status: Status;

  taskStatus = Status;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  tastStatusChangeHandler(task, status) {
    const updatedStatus = { ...task, status: status };
    this.taskService.createOrEditTask(updatedStatus);
  }
}
