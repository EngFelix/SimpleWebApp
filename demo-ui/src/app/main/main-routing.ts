import {HomeComponent} from "./home/home.component";

export const MainRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'users',
    loadChildren: () => import('../user/user.module').then(module => module.UserModule) },
  { path: '', component: HomeComponent }

];
