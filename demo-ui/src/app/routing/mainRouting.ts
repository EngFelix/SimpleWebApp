import {HomeComponent} from "../main/home/home.component";

export const MainRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'users',
    loadChildren: () => import('../model/user.module').then(module => module.UserModule) },
  { path: '', component: HomeComponent }

];
