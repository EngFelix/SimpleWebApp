import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UsersRoutes} from './users.routing';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './users.component';
import {TranslateModule} from '@ngx-translate/core';
import {UserService, UserServiceImpl} from '../service/user.service';
import {AddUserComponent} from './add-user/add-user.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {UserFacadeOld} from '../facades/user.facade.old';
import {StoreModule} from '@ngrx/store';
import {reducer} from '../store/reducers/users.reducers';
import {UsersFacade} from '../facades/users.facade';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from '../store/effects/users.effects';

@NgModule({
  declarations: [UsersComponent, AddUserComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(UsersRoutes),
    HttpClientModule,
    TranslateModule,
    ModalModule.forChild(),
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('users', {reducer}),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [{
    provide: UserService,
    useClass: UserServiceImpl
  }, UserFacadeOld, UsersFacade],
  bootstrap: [UsersComponent]
})
export class UsersModule {
}
