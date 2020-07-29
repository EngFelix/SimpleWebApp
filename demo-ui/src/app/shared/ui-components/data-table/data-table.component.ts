import {AfterViewInit, Component, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';
import {DataTableCell} from './data-table-cell/data-table-cell';

export interface DataTableColumn<T> {
  colName: any;
  cellCreator: DataTableCell;
}

@Component({
  selector: 'data-table',
  templateUrl: './data-table.html'
})
export class DataTableComponent<T> implements AfterViewInit{
  @Input('table-columns') tableColumns: Array<DataTableColumn<T>>;
  @Input('table-data') tableData: Array<T>;


  ngAfterViewInit(): void {
  }
}
