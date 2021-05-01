import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Task } from 'src/app/models/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  taskList: Array<Task>;
  searchString = '';
  selectedTask;
  taskEditState = false;
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

  cardClickHandler(task) {
    this.selectedTask = task;
    this.taskEditState = true;
  }

  addCardClickHandler() {
    this.selectedTask = {};
    this.taskEditState = false;
  }

  removeTaskHandler() {
    delete this.selectedTask;
  }
}
