import {Directive, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[data-table-cell-host]'
})
export class DataTableCellDirective<T> {
  @Input() data!: T
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
