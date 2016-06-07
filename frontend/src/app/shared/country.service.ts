import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Country} from '../model/backend-typings';
import {CrudService} from './crud.service';

@Injectable()
export class CountryService {

  constructor(private crud: CrudService) {
  }

  getCountriesAuthenticated(): Observable<Country[]> {
    return this.crud.get('/rest/countries');
  }
}
