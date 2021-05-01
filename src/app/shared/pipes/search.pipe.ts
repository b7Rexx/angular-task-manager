import { Pipe, PipeTransform } from '@angular/core';

import { Task } from 'src/app/models/task.interface';

@Pipe({
  name: 'taskSearch',
})
export class SearchPipe implements PipeTransform {
  transform(items: Task[], searchString: string): Task[] {
    if (!searchString) return items;

    searchString = searchString.toLowerCase();
    return items.filter(function (item) {
      return item.title.toLowerCase().includes(searchString);
    });
  }
}
