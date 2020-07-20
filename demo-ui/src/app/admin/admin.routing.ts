import {Routes} from '@angular/router';
import {AdminPageComponent} from './admin-page/admin-page.component';

export const AdminRoutes: Routes = [
  {path: 'users',
  loadChildren: () => import('./user-admin/user-admin.module').then(module => module.UserAdminModule)},
  {path: '', component: AdminPageComponent}
];
