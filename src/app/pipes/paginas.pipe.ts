import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginas'
})
export class PaginasPipe implements PipeTransform {

  transform(objects: any[]): any[] {
    let cantJuegos = 0;
    if (objects) {
      cantJuegos = objects.length % 3 + objects.length / 3;
    };
    return objects.slice(0,cantJuegos);
  }
}

