import {Pipe, PipeTransform,} from '@angular/core';
import {Hotel} from '../model/backend-typings';

@Pipe({
  name: 'hotelFilter',
  pure: false
})
export default class HotelFilterPipe implements PipeTransform {
  transform(hotels:Hotel[], filterInput:string):Hotel[] {
    let filter = filterInput ? filterInput.toLocaleLowerCase() : "";
    return filter ? hotels.filter(hotel =>
      this.hotelMatchesCriteria(hotel, filter)) : hotels;
  }

  hotelMatchesCriteria(hotel:Hotel, filter:string):boolean {
    return (hotel.name ? hotel.name.toLocaleLowerCase().includes(filter) : false) ||
      (hotel.description ? hotel.description.toLocaleLowerCase().includes(filter) : false) ||
      (hotel.city ? hotel.city.toLocaleLowerCase().includes(filter) : false);
  }
}
