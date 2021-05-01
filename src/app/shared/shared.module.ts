import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
  declarations: [TaskCardComponent],
  imports: [CommonModule],
  exports: [TaskCardComponent],
})
export class SharedModule {}
