import {Component, ViewEncapsulation} from 'angular2/core';
import {HotelsComponent} from './hotels.component';
import {MaterializeDirective} from 'angular2-materialize';

export class Hotel {
  public id: number;
  public name: string;
  public description: string;
  public zipCode: string;
  public city: string;
  public countryCode: string;
  public website: string;
  public tripAdvisorUrl: string;
  public holidayCheckUrl: string;
  public rooms: number;

  constructor(id: number, name: string, description: string, zipCode: string, city: string, countryCode: string, website: string, tripAdvisorUrl: string, holidayCheckUrl: string, rooms: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.zipCode = zipCode;
    this.city = city;
    this.countryCode = countryCode;
    this.website = website;
    this.tripAdvisorUrl = tripAdvisorUrl;
    this.holidayCheckUrl = holidayCheckUrl;
    this.rooms = rooms;
  }

  domain(): string {
    try {
      const link: string = this.website.split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return undefined;
    }
  }
}

@Component({
  selector: 'app',
  directives: [HotelsComponent, MaterializeDirective],
  styles: [
    require('../assets/css/main.scss')
  ],
  encapsulation: ViewEncapsulation.None,
  template: `
<div class="row">
  <h1>Hotels</h1>
   <div class="col m12">
        <div class="card-panel">
            <hotels></hotels>
        </div>
   </div>
</div>
`
})
export class App {
  constructor() {

  }
}
