import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printList'
})
export class PrintListPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
