import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.html'
})
export class DataTableComponent{
  @Input('table-columns') tableColumns: Array<Object>;
  @Input('table-data') tableData: Array<Object>;

  @Output('table-selected')
  eventEmitter: EventEmitter<Object> = new EventEmitter<Object>();

  SelectTable(_selected:Object) {
    this.eventEmitter.emit(_selected);
  }
}
