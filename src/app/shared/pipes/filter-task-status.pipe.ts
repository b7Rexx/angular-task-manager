import { Pipe, PipeTransform } from '@angular/core';

import { Task } from 'src/app/models/task.interface';

@Pipe({
  name: 'filterTaskStatus',
})
export class FilterTaskStatusPipe implements PipeTransform {
  transform(items: Task[], status: string): Task[] {
    if (!status) return [];

    status = status.toLowerCase();
    return items.filter(function (item) {
      return item.status.toLowerCase() === status;
    });
  }
}
