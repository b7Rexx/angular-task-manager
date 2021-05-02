import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchPipe } from './pipes/search.pipe';
import { ReadmoreDirective } from './directives/readmore.directive';
import { FilterTaskStatusPipe } from './pipes/filter-task-status.pipe';

import { MaterialModule } from '../material.module';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  declarations: [
    SearchPipe,
    TaskCardComponent,
    TaskFormComponent,
    ReadmoreDirective,
    FilterTaskStatusPipe,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    SearchPipe,
    TaskCardComponent,
    TaskFormComponent,
    ReadmoreDirective,
    FilterTaskStatusPipe,
  ],
})
export class SharedModule {}
