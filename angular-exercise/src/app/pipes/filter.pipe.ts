import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/Article';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], term: string, field: string): any {
    if (!values || !term) {
      return values;
    } else {
      return values
        .filter(value => value[field].toLowerCase().includes(term.toLowerCase()));
    }
  }

}