import {HomeComponent} from './master-page/home/home.component';
import {Routes} from '@angular/router';
import {LoginComponent} from './authentication/login/login.component';

export const MainRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {path: '', component: HomeComponent}

];
