import {Component, ViewEncapsulation} from 'angular2/core';
import {HotelsComponent} from './hotel-overview/hotels.component.ts';
import {MaterializeDirective} from 'angular2-materialize';

@Component({
  selector: 'app',
  directives: [HotelsComponent, MaterializeDirective],
  styles: [
    require('../assets/css/main.scss')
  ],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.template.html')
})
export class App {
  constructor() {

  }
}
