import {Component} from '@angular/core';
import {HotelService} from './../../shared/hotel.service.ts';
import {AngularFire} from 'angularfire2';
import {HotelService} from './../../services/hotel.service.ts';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Hotel} from './../../model/hotel.model.ts';

@Component({
  selector: 'hotels',
  directives: [ROUTER_DIRECTIVES],
  providers: [HotelService, ROUTER_PROVIDERS],
  template: require('./hotels.component.html')
})
export class HotelsComponent {
  hotels: Observable<Hotel[]>;

  constructor(private hotelService: HotelService, af: AngularFire) {
    this.hotels = af.list('/');
  }
}
