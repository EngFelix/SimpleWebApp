import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserRoutes} from '../routing/userRouting';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from '../user/user.component';
import {DataTableComponent} from '../utility/data-table.component';



@NgModule({
  declarations: [UserComponent, DataTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    HttpClientModule
  ],
  bootstrap: [UserComponent]
})
export class UserModule { }
