import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcardformat',
  standalone: true
})
export class CreditcardformatPipe implements PipeTransform {

  transform(val: string): string {
    if (!val || val.length !== 16) {
      return '';
    }

    const parts = val.match(/.{1,4}/g); 
    if (parts) {
      return parts.join(' - '); 
    } else {
      return '';
    }
  }
 

}
