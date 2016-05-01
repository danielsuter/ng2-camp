import {Component} from 'angular2/core';
import {HotelService} from './../../services/hotel.service.ts';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from "angular2/router";
import {Hotel} from './../../model/hotel.model.ts';

@Component({
  selector: 'hotels',
  directives: [ROUTER_DIRECTIVES],
  providers: [HotelService, ROUTER_PROVIDERS],
  template: require('./hotels.template.html')
})
export class HotelsComponent {
  hotels: Observable<Hotel[]>;

  constructor(private hotelService: HotelService) {
    this.hotels = this.hotelService.getHotels();
  }
}
