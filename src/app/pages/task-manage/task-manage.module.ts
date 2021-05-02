import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskManageComponent } from './task-manage.component';
import { ManageStatusModule } from './manage-status/manage-status.module';

const routes: Routes = [
  {
    path: '',
    component: TaskManageComponent,
  },
];

@NgModule({
  declarations: [TaskManageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ManageStatusModule,
    RouterModule.forChild(routes),
  ],
})
export class TaskManageModule {}
