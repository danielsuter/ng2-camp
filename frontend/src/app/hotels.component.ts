import {Component} from 'angular2/core';
import {Hotel} from './app.component';
import {HotelService} from './hotel.service';
import {SortableHeaderComponent, Sorter} from './table/sortable-header.component';

@Component({
  selector: 'hotels',
  directives: [SortableHeaderComponent],
  providers: [HotelService],
  template: `
<table class="responsive-table striped">
    <thead>
    <tr>
        <th><sortable-header [name]="'Name'" [sorter]="sorter" [compareFunction]="byName"></sortable-header></th>
        <th><sortable-header [name]="'City'" [sorter]="sorter" [compareFunction]="byCity"></sortable-header></th>
        <th><sortable-header [name]="'Country'" [sorter]="sorter" [compareFunction]="byCountry"></sortable-header></th>
        <th><sortable-header [name]="'Website'" [sorter]="sorter" [compareFunction]="byWebsite"></sortable-header></th>
        <th><sortable-header [name]="'Trip advisor'"></sortable-header></th>
        <th><sortable-header [name]="'Rooms'" [sorter]="sorter" [compareFunction]="byRooms"></sortable-header></th>
    </tr>
    </thead>
    
    <tbody>
    <tr *ngFor="#hotel of sorter.sort(hotels)">
        <td>{{hotel.name}}</td>
        <td>{{hotel.city}}</td>
        <td>{{hotel.countryCode}}</td>
        <td><a href="{{hotel.website}}" target="_blank">{{hotel.domain()}}</a></td>
        <td><a href="{{hotel.tripAdvisorUrl}}" target="_blank">Trip advisor</a></td>
        <td>{{hotel.rooms}}</td>
    </tr>
</table>
`
})
export class HotelsComponent {
  public hotels: Hotel[];

  public sorter: Sorter<Hotel> = new Sorter<Hotel>();

  public byName: (a: Hotel, b: Hotel) => number = (h1, h2) => h1.name.localeCompare(h2.name);
  public byCity: (a: Hotel, b: Hotel) => number = (h1, h2) => h1.city.localeCompare(h2.city);
  public byCountry: (a: Hotel, b: Hotel) => number = (h1, h2) => h1.countryCode.localeCompare(h2.countryCode);
  public byWebsite: (a: Hotel, b: Hotel) => number = (h1, h2) => h1.website.localeCompare(h2.website);
  public byRooms: (a: Hotel, b: Hotel) => number = (h1, h2) => h1.rooms - h2.rooms;

  constructor(private hotelService: HotelService) {
    this.hotelService.getHotels().subscribe(hotels => this.hotels = hotels);
  }
}
