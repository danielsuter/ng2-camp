import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Router} from '@ngrx/router';
import {AuthHttp} from 'angular2-jwt';
import {Hotel} from '../model/backend-typings';
import {UrlProvider} from './urlProvider';

@Injectable()
export class HotelService {

  constructor(private http: Http,
              private authHttp: AuthHttp,
              private router: Router) {
  }

  saveHotel(hotel : Hotel) : Observable<Hotel> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let hotelJson = JSON.stringify(hotel);
    console.log(hotelJson);
    return this.authHttp.post(UrlProvider.getBackendUrl('/rest/hotels'), hotelJson, options).
      map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  getHotelsAuthenticated(): Observable<Hotel[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let hotelsSubject = new Subject<Hotel[]>();

    this.authHttp.get(UrlProvider.getBackendUrl('/rest/hotels'), {headers: headers})
      .subscribe(
        value => hotelsSubject.next(value.json()),
        error => this.handleError(error),
        () => hotelsSubject.complete()
      );

    return hotelsSubject.asObservable();
  }

  getHotelAuthenticated(id: number): Observable<Hotel> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let hotelSubject = new Subject<Hotel>();

    this.authHttp.get(UrlProvider.getBackendUrl('/rest/hotels/' + id), {headers: headers})
      .subscribe(
        value => hotelSubject.next(value.json()),
        error => this.handleError(error),
        () => hotelSubject.complete()
      );

    return hotelSubject.asObservable();
  }

  deleteHotel(id: number): Observable<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let hotelSubject = new Subject<Response>();

    this.authHttp.delete(UrlProvider.getBackendUrl('/rest/hotels/' + id), {headers: headers})
      .subscribe(
        value => hotelSubject.next(value),
        error => this.handleError(error),
        () => hotelSubject.complete()
      );

    return hotelSubject.asObservable();
  }

  private handleError(error: Error) {
    console.log('error', error);
    if (error.message === 'No JWT present') {
      console.log('no JWT');
      this.router.go('/login');
    }
  }
}
