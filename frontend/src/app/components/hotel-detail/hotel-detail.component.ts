import {Component} from '@angular/core';
import {RouteParams} from '@ngrx/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import {HotelService} from '../../shared/hotel.service';
import {Hotel} from '../../model/backend-typings';

@Component({
  selector: 'hotel-detail',
  directives: [],
  providers: [HotelService],
  template: require('./hotel-detail.component.html')
})
export class HotelDetailComponent {
  hotelId: Observable<number>;
  hotel: Hotel;

  constructor(routeParams: RouteParams, private hotelService: HotelService) {
    this.hotelId = routeParams.pluck<number>('id');
    this.hotelId.flatMap(id => this.hotelService.getHotelAuthenticated(id)).subscribe(hotel => {
      this.hotel = hotel;
    });
  }
}
