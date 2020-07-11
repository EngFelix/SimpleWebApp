import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UsersRoutes} from './users.routing';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './users.component';
import {TranslateModule} from '@ngx-translate/core';
import {AddUserComponent} from './add-user/add-user.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import * as fromUser from '../store/reducers/user.reducers';
import {UserFacade} from '../store/facades/user.facade';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from '../store/effects/user.effects';
import {UsersService, UsersServiceImpl} from '../service/users.service';

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
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [{
    provide: UsersService,
    useClass: UsersServiceImpl
  }, UserFacade],
  bootstrap: [UsersComponent]
})
export class UsersModule {
}
