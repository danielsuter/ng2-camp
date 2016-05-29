import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HotelService} from './../../shared/hotel.service.ts';
import {Hotel} from './../../model/hotel.model.ts';

@Component({
  selector: 'hotels',
  directives: [],
  providers: [HotelService],
  template: require('./hotels.component.html')
})
export class HotelsComponent {
  hotels: Observable<Hotel[]>;

  constructor(private hotelService: HotelService) {
    this.hotels = this.hotelService.getHotelsAuthenticated();
  }
}
