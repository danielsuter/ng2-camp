import {Component, ViewEncapsulation} from '@angular/core';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HotelsComponent} from './components/hotel-overview/hotels.component';

@Component({
  selector: 'app',
  directives: [HotelsComponent, NavigationComponent],
  providers: [],
  styles: [
    require('../assets/css/main.scss')
  ],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.template.html')
})
export class App {

  constructor() {
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
