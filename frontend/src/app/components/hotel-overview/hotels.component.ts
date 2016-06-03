import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HotelService} from './../../shared/hotel.service.ts';
import {Hotel} from '../../model/backend-typings';

@Component({
  selector: 'hotels',
  directives: [],
  providers: [HotelService],
  template: require('./hotels.component.html')
})
export class HotelsComponent implements OnInit {
  hotels: Observable<Hotel[]>;

  constructor(private hotelService: HotelService) {
  }

  ngOnInit() {
    this.hotels = this.hotelService.getHotelsAuthenticated();
  }
}
