import {Component} from '@angular/core';
import {Hotel} from "../../model/backend-typings";
import {HotelService} from "../../shared/hotel.service";
import { Router } from '@ngrx/router';

@Component({
  selector: 'hotel-new',
  directives: [],
  providers: [HotelService],
  template: require('./hotel-new.component.html')
})
export class HotelNewComponent {
  hotel : Hotel;

  constructor(private hotelService: HotelService, private router : Router) {
    this.hotel = {} as Hotel;
  }

  saveHotel() {
    this.hotelService.saveHotel(this.hotel).subscribe(data =>
      this.openHotel(data));
  }

  openHotel(hotel : Hotel) {
    this.router.go('/hotels/' + hotel.id);
  }
}
