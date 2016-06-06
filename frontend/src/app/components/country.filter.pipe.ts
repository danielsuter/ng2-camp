import {Pipe, PipeTransform,} from '@angular/core';
import {Hotel} from '../model/backend-typings';

@Pipe({
  name: 'countryFilter',
  pure: false
})
export default class CountryFilterPipe implements PipeTransform {
  transform(hotels:Hotel[], countries:string[]):Hotel[] {
    return countries.length > 1 ? hotels.filter(
      hotel => CountryFilterPipe.hotelMatchesCriteria(hotel, countries)) : hotels;
  }

  static hotelMatchesCriteria(hotel:Hotel, countries:string[]):boolean {
    return countries.includes(hotel.countryCode);
  }
}
