import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summarypipeword'
})
export class SummarypipewordPipe implements PipeTransform {

  transform(value: string, limit: number=30): unknown {
    return value.split(" ").slice(0,limit);
  }

}
