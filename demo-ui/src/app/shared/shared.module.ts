import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import {DataTableComponent} from './ui-components/data-table/data-table.component';
import {TranslateModule} from '@ngx-translate/core';
import {AlertModule} from 'ngx-bootstrap/alert';



@NgModule({
  declarations: [LoadingComponent, DataTableComponent],
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
