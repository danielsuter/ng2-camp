import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Router} from '@ngrx/router';
import {AuthHttp} from 'angular2-jwt';
import {Hotel} from '../model/backend-typings';
import {CrudService} from './crud.service';

@Injectable()
export class HotelService {

  constructor(private authHttp: AuthHttp, private router: Router, private crud: CrudService) {
  }

  saveHotel(hotel: Hotel): Observable<Hotel> {
    return this.crud.post('/rest/hotels', hotel);
  }

  getHotelsAuthenticated(): Observable<Hotel[]> {
    return this.crud.get('/rest/hotels');
  }

  getHotelAuthenticated(id: number): Observable<Hotel> {
    return this.crud.get('/rest/hotels/' + id);
  }

  deleteHotel(id: number): Observable<Response> {
    return this.crud.delete('/rest/hotels/' + id);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Error) {
    console.log('error', error);
    if (error.message === 'No JWT present') {
      console.log('no JWT');
      this.router.go('/login');
    }
  }
}
