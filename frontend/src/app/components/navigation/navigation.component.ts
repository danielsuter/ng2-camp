import {Component} from '@angular/core';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'navigation',
  directives: [],
  providers: [AuthService],
  template: require('./navigation.component.html')
})
export class NavigationComponent {

  constructor(private auth: AuthService) {
  }

  logout() {
    this.auth.logout();
  }
}
