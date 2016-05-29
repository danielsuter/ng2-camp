import {Routes} from '@ngrx/router';
import {HomeComponent} from '../components/home/hotel-detail.component';
import {HotelsComponent} from '../components/hotel-overview/hotels.component';
import {LoginComponent} from '../components/login/login.component';
import {AuthGuard} from './authGuard';

export const routes: Routes = [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/hotels',
    guards: [ AuthGuard ],
    component: HotelsComponent
  },
  {
    path: '/login',
    component: LoginComponent
  }
];
