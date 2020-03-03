import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {

  transform(value: any): any {

    value = value.replace('[','');
    value = value.replace(']','');
    
    return value;
  }

}
