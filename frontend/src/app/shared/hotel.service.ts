import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Router} from '@ngrx/router';
import {AuthHttp} from 'angular2-jwt';
import {Hotel} from '../model/backend-typings';

@Injectable()
export class HotelService {

  constructor(private http: Http, private authHttp: AuthHttp, private router: Router) {
  }

  getHotels(): Observable<Hotel[]> {
    // const queryUrl: string = `http://localhost:8080/rest/hotels`;
    const queryUrl = `http://beta.json-generator.com/api/json/get/NkpdDDTeb`;
    return this.http.get(queryUrl)
      .map((res: Response) => res.json());
  }

  getHotelsAuthenticated(): Observable<Hotel[]> {
    const queryUrl: string = `rest/hotels`;

    let hotelsSubject = new Subject<Response>();

    this.authHttp.get(queryUrl)
      .subscribe(
        value => hotelsSubject.next(value),
        error => this.handleError(error),
        () => hotelsSubject.complete()
      );

    return hotelsSubject.asObservable()
      .map((res: Response) => res.json());
  }

  private handleError(error: Error) {
    console.log('error', error);
    if (error.message === 'No JWT present') {
      console.log('no JWT');
      this.router.go('/login');
    }
  }
}
