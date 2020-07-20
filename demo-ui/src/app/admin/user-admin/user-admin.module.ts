import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserAdminPageComponent} from './user-admin-page/user-admin-page.component';
import {UserModule} from '../../user/user.module';
import {TranslateModule} from '@ngx-translate/core';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [UserAdminPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    TranslateModule,
    RouterModule.forChild([{path: '', component:UserAdminPageComponent}]),
    ModalModule.forChild(),
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [UserAdminPageComponent]
})
export class UserAdminModule { }
