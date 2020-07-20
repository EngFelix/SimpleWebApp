import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import * as fromUser from './user.reducer';
import {UserFacade} from './user.facade';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './user.effects';
import {UserService, UsersServiceImpl} from './user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromUser.usersFeatureKey, fromUser.userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [{
    provide: UserService,
    useClass: UsersServiceImpl
  }, UserFacade]
})
export class UserModule {
}
