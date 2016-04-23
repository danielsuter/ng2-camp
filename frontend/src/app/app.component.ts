import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
  selector: 'app',
  styles: [
    require('../assets/css/main.scss')
  ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <header>
      <h1>Hello World</h1>
    </header>
  `
})
export class App {

}
