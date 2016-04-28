import {Injectable} from 'angular2/core';
import {Hotel} from './app.component';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HotelService {

  http: Http;

  private MOCK_HOTELS: Hotel[] = [
    new Hotel(1, 'Schloss Münchenweiler', 'A hotel', '007', 'Münchenweiler', 'CH', 'http://www.schloss-muenchenwiler.ch/home.html', 'http://test.com', 'http://test.com', 15),
    new Hotel(2, 'Hotel Moosegg', 'A hotel', '007', 'Moosegg', 'CH', 'http://www.moosegg.ch/v2/', 'http://test.com', 'http://test.com', 30),
    new Hotel(3, 'Steigenberger Inselhotel', 'A hotel', '007', 'Konstanz', 'DE', 'http://de.steigenberger.com/Konstanz/Steigenberger-Inselhotel', 'http://test.com', 'http://test.com', 30)
  ];

  constructor(http: Http) {
    this.http = http;
  }

  getHotels(): Observable<Hotel[]> {
    let queryUrl: string = `http://localhost:8080/rest/hotels`;
    return this.http.get(queryUrl)
      .map((response: Response) => {
        return (<any>response.json()).map(item => {
          // console.log('raw item', item); // uncomment if you want to debug
          return new Hotel(item.id, item.name, item.description, item.zipCode, item.city, item.countryCode,
            item.website, item.tripAdvisorUrl, item.holidayCheckUrl, item.rooms);
        });
      });
  }

  getMockHotels(): Promise<Hotel[]> {
    return Promise.resolve(this.MOCK_HOTELS);
  }

  getMockHotelsDelayed(): Promise<Hotel[]> {
    return new Promise(resolve => setTimeout(() => resolve(this.MOCK_HOTELS), 2000)
    );
  }
}
