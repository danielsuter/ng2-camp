import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HotelService} from './../../shared/hotel.service.ts';
import {Hotel} from '../../model/backend-typings';
import FilterPipe from '../hotel.filter.pipe.ts';
import {MaterializeDirective} from "angular2-materialize/dist/index";
import CountryFilterPipe from "../country.filter.pipe";

@Component({
  selector: 'hotels',
  directives: [MaterializeDirective],
  providers: [HotelService],
  pipes: [FilterPipe, CountryFilterPipe],
  template: require('./hotels.component.html')
})
export class HotelsComponent implements OnInit {
  hotels: Observable<Hotel[]>;
  countries = [];
  private selectedValues =[];

  constructor(private hotelService: HotelService) {
  }

  ngOnInit() {
    this.hotels = this.hotelService.getHotelsAuthenticated();
    this.countries = [
      {value:"CH",name:"Switzerland"},
      {value:"DE",name:"Germany"},
      {value:"AT",name:"Austria"}
    ];

  }

  change(options) {
    this.selectedValues = Array.apply(null, options)  // convert to real Array
      .filter(option => option.selected)
      .map(option => option.value);

    console.log(this.selectedValues);
  }
}
