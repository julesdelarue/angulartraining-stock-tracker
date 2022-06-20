import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {
  /**
   * Vanilla month translation
   * @param value
   * @param args
   */
  transform(value: number, ...args: unknown[]): string {
    switch (value){
      case 1: return "January";
      case 2: return "February";
      case 3: return "Mars";
      case 4: return "April";
      case 5: return "May";
      case 6: return "June";
      case 7: return "Juillet";
      case 8: return "August";
      case 9: return "September";
      case 10: return "October";
      case 11: return "November";
      case 12: return "December";
      default: return value.toString();
    }
  }

}
