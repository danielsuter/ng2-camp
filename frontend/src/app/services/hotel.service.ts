import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Hotel} from './../model/hotel.model.ts';

@Injectable()
export class HotelService {

  constructor(private http: Http) {
  }

  getHotels(): Observable<Hotel[]> {
    // const queryUrl: string = `http://localhost:8080/rest/hotels`;
    const queryUrl: string = `http://beta.json-generator.com/api/json/get/NkpdDDTeb`;
    return this.http.get(queryUrl)
      .map((res: Response) => res.json());
  }
}
