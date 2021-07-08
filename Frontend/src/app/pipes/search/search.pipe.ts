import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => {
      if ((item.name.search(new RegExp(filterText, 'i')) > -1) || (item.email.search(new RegExp(filterText, 'i')) > -1)) {
        return item;
      }
    }) : [];
  }

}
