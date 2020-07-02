import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface DataTableColumn<T> {
  colName: string;
  colVal: (t: T) => string;
}

@Component({
  selector: 'data-table',
  templateUrl: './data-table.html'
})
export class DataTableComponent<T>{
  @Input('table-columns') tableColumns: Array<DataTableColumn<T>>;
  @Input('table-data') tableData: Array<T>;

  @Output('table-selected')
  eventEmitter: EventEmitter<T> = new EventEmitter<T>();

  SelectTable(_selected:T) {
    this.eventEmitter.emit(_selected);
  }
}
