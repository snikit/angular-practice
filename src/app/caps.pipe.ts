import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caps',
})
export class CapsPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    return value.toUpperCase();
  }
}
