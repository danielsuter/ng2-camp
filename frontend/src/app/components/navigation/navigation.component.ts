import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'navigation',
  directives: [ROUTER_DIRECTIVES],
  providers: [],
  template: require('./navigation.component.html')
})
export class NavigationComponent {

  constructor(private router: Router) {
  }

  home() {
    this.router.navigate(['/home']);
  }

  hotels() {
    this.router.navigate(['/hotels']);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
