import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserRoutes} from './user.routing';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './user.component';
import {DataTableComponent} from '../utility/data-table.component';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [UserComponent, DataTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    HttpClientModule,
    TranslateModule
  ],
  bootstrap: [UserComponent]
})
export class UserModule { }
