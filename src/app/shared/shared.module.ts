import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchPipe } from './pipes/search.pipe';
import { MaterialModule } from '../material.module';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  declarations: [TaskCardComponent, TaskFormComponent, SearchPipe],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [TaskCardComponent, TaskFormComponent, SearchPipe],
})
export class SharedModule {}
