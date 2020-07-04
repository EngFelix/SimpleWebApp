import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import {DataTableComponent} from './ui-components/data-table/data-table.component';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [LoadingComponent, DataTableComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    LoadingComponent,
    DataTableComponent
  ]
})
export class SharedModule { }
