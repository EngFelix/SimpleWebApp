import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import {DataTableComponent} from './ui-components/data-table/data-table.component';
import {TranslateModule} from '@ngx-translate/core';
import {AlertModule} from 'ngx-bootstrap/alert';
import {DataTableCellDirective} from './ui-components/data-table/data-table-cell/data-table-cell.directive';
import {DataTableCellStringComponent} from './ui-components/data-table/data-table-cell/common/data-table-cell-string.component';
import {DataTableCellComponent} from './ui-components/data-table/data-table-cell/data-table-cell.component';



@NgModule({
  declarations: [LoadingComponent, DataTableComponent, DataTableCellComponent, DataTableCellDirective, DataTableCellStringComponent],
  imports: [
    CommonModule,
    TranslateModule,
    AlertModule.forRoot()
  ],
  exports: [
    LoadingComponent,
    DataTableComponent,
    AlertModule
  ]
})
export class SharedModule { }
