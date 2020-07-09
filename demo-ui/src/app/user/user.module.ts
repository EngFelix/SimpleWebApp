import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserRoutes} from './user.routing';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './user.component';
import {TranslateModule} from '@ngx-translate/core';
import {UserService, UserServiceImpl} from '../service/user.service';
import {AddUserComponent} from './add-user/add-user.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {UserFacade} from '../data/facades/user.facade';


@NgModule({
  declarations: [UserComponent, AddUserComponent],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule.forChild(UserRoutes),
        HttpClientModule,
        TranslateModule,
        ModalModule.forChild(),
        BsDatepickerModule.forRoot(),
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [{
    provide: UserService,
    useClass: UserServiceImpl
  }, UserFacade],
  bootstrap: [UserComponent]
})
export class UserModule {
}
