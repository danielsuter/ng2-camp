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
  template: `
<div class="row">
  <h1>Hotels</h1>
   <div class="col m12">
        <div class="card-panel">
            <hotels></hotels>
        </div>
   </div>
</div>
`
})
export class App {
  constructor() {

  }
}
