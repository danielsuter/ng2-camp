import {Component} from '@angular/core';
import {HotelService} from './../../shared/hotel.service.ts';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Hotel} from './../../model/hotel.model.ts';

@Component({
  selector: 'login',
  directives: [ROUTER_DIRECTIVES],
  providers: [HotelService, ROUTER_PROVIDERS],
  template: require('./login.component.html')
})
export class LoginComponent {

  constructor() {
  }
}
