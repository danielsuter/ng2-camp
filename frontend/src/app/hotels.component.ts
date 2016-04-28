import {Component} from 'angular2/core';
import {Hotel} from './app.component';
import {HotelService} from './hotel.service';

@Component({
  selector: 'hotels',
  providers: [HotelService],
  template: `
<table class="responsive-table striped">
    <thead>
    <tr>
        <!--<th data-field="id">ID</th>-->
        <th data-field="name" (click)="sort(byName)">Name<i class="tiny material-icons" [ngClass]="{'hidden-icon': !isSorted(byName)}">swap_vert</i></th>
        <!--<th data-field="description">Description</th>-->
        <!--<th data-field="zipCode">Zip code</th>-->
        <th data-field="city" (click)="sort(byCity)">City<i class="tiny material-icons" [ngClass]="{'hidden-icon': !isSorted(byCity)}">swap_vert</i></th>
        <th data-field="countryCode" (click)="sort(byCountry)">Country<i class="tiny material-icons" [ngClass]="{'hidden-icon': !isSorted(byCountry)}">swap_vert</i></th>
        <th data-field="website" (click)="sort(byWebsite)">Website<i class="tiny material-icons" [ngClass]="{'hidden-icon': !isSorted(byWebsite)}">swap_vert</i></th>
        <th data-field="tripAdvisorUrl">Trip advisor</th>
        <th data-field="rooms" (click)="sort(byRooms)">Rooms<i class="tiny material-icons" [ngClass]="{'hidden-icon': !isSorted(byRooms)}">swap_vert</i></th>
    </tr>
    </thead>
    
    <tbody>
    <tr *ngFor="#hotel of hotelsSorted()">
        <!--<td>ID</td>-->
        <td>{{hotel.name}}</td>
        <!--<td>Description</td>-->
        <!--<td>Zip code</td>-->
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
  // @Input()
  hotels: Hotel[];

  private reverse: boolean = false;

  public byName: (a: Hotel, b: Hotel) => number = (h1, h2) => h1.name.localeCompare(h2.name);
  public byCity: (a: Hotel, b: Hotel) => number = (h1, h2) => h1.city.localeCompare(h2.city);
  public byCountry: (a: Hotel, b: Hotel) => number = (h1, h2) => h1.countryCode.localeCompare(h2.countryCode);
  public byWebsite: (a: Hotel, b: Hotel) => number = (h1, h2) => h1.website.localeCompare(h2.website);
  public byRooms: (a: Hotel, b: Hotel) => number = (h1, h2) => h1.rooms - h2.rooms;

  constructor(private hotelService: HotelService) {
    this.hotelService.getHotelsDelayed().then(hotels => this.hotels = hotels);
  }

  hotelsSorted(): Hotel[] {
    if (this.hotels === undefined) {
      return [];
    }
    let sorted: Hotel[] = this.hotels.sort(this.compareFunction);
    if (this.reverse) {
      sorted = sorted.reverse();
    }
    return sorted;
  }

  public isSorted(compareFunction: (a: Hotel, b: Hotel) => number): boolean {
    return this.compareFunction === compareFunction;
  }

  public sort(compareFunction: (a: Hotel, b: Hotel) => number): void {
    if (this.isSorted(compareFunction)) {
      this.reverse = !this.reverse;
    } else {
      this.reverse = false;
    }
    this.compareFunction = compareFunction;
  }

  private compareFunction: (a: Hotel, b: Hotel) => number = (h1, h2) => 0;
}
