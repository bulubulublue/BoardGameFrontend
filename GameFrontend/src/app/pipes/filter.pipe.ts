import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, isName: boolean, content: string): any {
    if(content === ""){
      return value;
    }
    if(isName){
      return value.filter(data => {
        return data.Name.toLowerCase().match(content.toLowerCase());
      });
    }else {
      return value.filter(data => {
        return data.Details[0].boardgamecategory.toLowerCase().match(content.toLowerCase());
      });
    }
  }

}
