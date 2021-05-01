import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  Output,
  SimpleChanges,
  OnChanges,
  EventEmitter,
} from '@angular/core';

import { Task } from 'src/app/models/task.interface';
import { TaskService } from 'src/app/services/task.service';
import { TaskType, Status, Priority } from 'src/app/models/task.enum';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit, OnChanges {
  taskType = TaskType;
  taskStatus = Status;
  taskPriority = Priority;

  @Input('task') task: Task;
  @Input('edit') edit = false;

  @Output('removeHandler') removeHandler = new EventEmitter();

  form: FormGroup;
  priority;

  constructor(
    public fb: FormBuilder,
    private snackBar: MatSnackBar,
    private taskService: TaskService
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      type: ['', Validators.required],
      priority: [''],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.task &&
      changes.task.previousValue?.id !== changes.task.currentValue?.id
    ) {
      this.setFormData();
    }
  }

  setFormData() {
    this.form.setValue({
      title: this.task.title || '',
      description: this.task.description || '',
      type: this.task.type || '',
      priority: this.task.priority || '',
      status: this.task.status || '',
    });
  }

  saveForm() {
    if (this.form.status === 'VALID') {
      this.task = {
        ...this.task,
        title: this.form.value.title,
        description: this.form.value.description,
        type: this.form.value.type,
        priority: this.form.value.priority,
        status: this.form.value.status,
      };
      this.taskService.createOrEditTask(this.task);
      this.snackBar.open(
        `Task ${this.edit ? 'updated' : 'created'}.`,
        'Dismiss',
        {
          duration: 2000,
        }
      );
    }
  }

  removeTask() {
    this.taskService.removeTask(this.task);
    this.removeHandler.emit();
    this.snackBar.open('Task removed.', 'Dismiss', {
      duration: 2000,
    });
  }
}
