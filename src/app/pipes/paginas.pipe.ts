import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginas'
})
export class PaginasPipe implements PipeTransform {

  transform(objects: any[]): any[] {
    if(objects) {
        return objects.slice(0,(objects.length / 3));
      };
    return objects;
  }
  }

