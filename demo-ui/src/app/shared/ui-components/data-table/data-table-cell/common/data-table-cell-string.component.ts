import {DataTableCellComponent} from '../data-table-cell.component';
import {Component, Input} from '@angular/core';

@Component({
  template: `
    {{stringMethod(data)}}
  `
})
export class DataTableCellStringComponent<T> implements DataTableCellComponent<T>{
  @Input() data: T;
  @Input() stringMethod: (T) => string;
}
