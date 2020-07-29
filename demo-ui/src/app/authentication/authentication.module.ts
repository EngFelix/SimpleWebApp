import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './authentication.service';
import {RouterModule} from '@angular/router';
import {LogoutComponent} from '../master-page/nav/logout.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    // RouterModule.forChild([{
    //   path: '/login',
    //   component: LoginComponent
    // }])
  ],
  providers: [AuthenticationService],
  exports: [
    LogoutComponent
  ],
  bootstrap: [LoginComponent]
})
export class AuthenticationModule {}
