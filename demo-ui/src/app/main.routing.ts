import {HomeComponent} from "./master-page/home/home.component";
import {Routes} from '@angular/router';

export const MainRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule) },
  { path: 'time-management',
    loadChildren: () => import('./time-management/time-management.module').then(module => module.TimeManagementModule) },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'home'}

];
