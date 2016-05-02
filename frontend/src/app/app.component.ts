import {Component, ViewEncapsulation} from 'angular2/core';
import {HotelsComponent} from './components/hotel-overview/hotels.component';

@Component({
  selector: 'app',
  directives: [HotelsComponent],
  styles: [
    require('../assets/css/main.scss')
  ],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.template.html')
})
export class App {
}
