import {HomeComponent} from "./home/home.component";

export const MainRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'users',
    loadChildren: () => import('../users/users.module').then(module => module.UsersModule) },
  { path: '', component: HomeComponent }

];
