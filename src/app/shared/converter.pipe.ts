import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: number, rate:number): unknown {
    return (value * rate).toFixed(2);
  }

}
