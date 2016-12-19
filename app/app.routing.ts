import { RouterModule, Routes } from '@angular/router';
import {AddGeekComponent} from '../app/geeks/addgeek.component';
import {ListGeeksComponent} from '../app/geeks/listgeeks.component';
import {HomeGeekComponent} from '../app/geeks/homegeek.component';


const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeGeekComponent },
  { path: 'geeks',  component: ListGeeksComponent },
  { path: 'addgeek', component: AddGeekComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);