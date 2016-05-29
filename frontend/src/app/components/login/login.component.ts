import {Component} from '@angular/core';
import {HotelService} from './../../shared/hotel.service.ts';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AuthService} from '../../shared/auth.service';
import {MaterializeDirective} from 'angular2-materialize';

@Component({
  selector: 'login',
  directives: [ROUTER_DIRECTIVES, MaterializeDirective],
  providers: [HotelService, ROUTER_PROVIDERS, AuthService],
  template: require('./login.component.html')
})
export class LoginComponent {

  private username: string = '';
  private password: string = '';

  constructor(private auth: AuthService) {
  }

  doLogin() {
    this.auth.login(this.username, this.password);
    this.username = '';
    this.password = '';
  }

  doLogout() {
    this.auth.logout();
    this.username = '';
    this.password = '';
  }

  invalid(): boolean {
    return this.username === '' || this.password === '';
  }
}
