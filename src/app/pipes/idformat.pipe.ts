import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idformat',
  standalone: true
})
export class IdformatPipe implements PipeTransform {

  transform(idNumber: string, datePart: string): string {
    if (!idNumber || idNumber.length !== 14) {
      return '';
    }

    const year = idNumber.substring(1, 3);
    const month = idNumber.substring(3, 5);
    const day = idNumber.substring(5, 7);

    switch (datePart) {
      case 'YY':
        return year;
      case 'MM':
        return month;
      case 'DD':
        return day;
      case 'FullDate':
        return `${day}-${month}-${'19' + year}`;
      default:
        return '';
    }
  }

}
