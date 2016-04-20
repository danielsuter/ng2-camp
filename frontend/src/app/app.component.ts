import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: `
    <header>
      <h1>Hello World</h1>
    </header>
  `
})
export class App {

}
