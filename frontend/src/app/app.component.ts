import {Component, ViewEncapsulation} from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HomeComponent} from './components/home/hotel-detail.component';
import {HotelsComponent} from './components/hotel-overview/hotels.component';
import {LoginComponent} from './components/login/login.component';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, HotelsComponent, NavigationComponent],
  providers: [ROUTER_PROVIDERS],
  styles: [
    require('../assets/css/main.scss')
  ],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.template.html')
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/login', component: LoginComponent},
  {path: '/hotels', component: HotelsComponent},
  {path: '*', component: HomeComponent}
])
export class App {

  constructor(private router: Router) {
  }

  ngOnInit() {

    let auth: string = localStorage.getItem('auth');
    if (auth === 'logged') {
      // this.router.navigate(['/']);
    } else {
      // this.router.navigate(['/login']);
    }
  }
}
