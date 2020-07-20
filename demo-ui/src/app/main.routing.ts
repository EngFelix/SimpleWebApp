import {HomeComponent} from "./master-page/home/home.component";
import {Routes} from '@angular/router';

export const MainRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule) },
  { path: '', component: HomeComponent }

];
