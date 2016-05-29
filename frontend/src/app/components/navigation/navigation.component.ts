import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'navigation',
  directives: [ROUTER_DIRECTIVES],
  providers: [AuthService],
  template: require('./navigation.component.html')
})
export class NavigationComponent {

  constructor(private router: Router, private auth: AuthService) {
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

  logout() {
    this.auth.logout();
  }
}
