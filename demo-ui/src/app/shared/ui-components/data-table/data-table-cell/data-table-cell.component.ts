import {Component, Input} from '@angular/core';

@Component({
  selector: 'data-table-cell',
  template: ''
})
export class DataTableCellComponent<T> {
  @Input() data: T;
}
