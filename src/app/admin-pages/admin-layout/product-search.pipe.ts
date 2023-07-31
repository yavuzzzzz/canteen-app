import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {


    filterText = filterText?.toLocaleLowerCase()

    return filterText ? value.filter((r: Product) => r.productName
      .toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
