import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TaskManageComponent } from './task-manage.component';

const routes: Routes = [
  {
    path: '',
    component: TaskManageComponent,
  },
];

@NgModule({
  declarations: [TaskManageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TaskManageModule {}
