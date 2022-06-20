import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enforcePositif'
})
export class EnforcePositifPipe implements PipeTransform {
  /**
   * Format input by adding + in from of it, according to 2nd parameter value
   * @param value
   * @param args
   */
  transform(originalValue: any, value:number): string|number {
    return value >= 0 ? `+${originalValue}` : originalValue;
  }

}
