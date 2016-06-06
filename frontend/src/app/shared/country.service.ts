import {Injectable} from '@angular/core';
import {Headers, Response} from '@angular/http';
import {AuthHttp} from "angular2-jwt";
import {UrlProvider} from "./urlProvider";
import {Observable} from "rxjs/Observable";
import {Country} from "../model/backend-typings";
import {Subject} from "rxjs/Subject";
import {Router} from '@ngrx/router';

@Injectable()
export class CountryService {

  constructor(
    private authHttp: AuthHttp,
    private router: Router
  ) { }

  getCountriesAuthenticated() : Observable<Country[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let countriesSubject = new Subject<Country[]>();

    this.authHttp.get(UrlProvider.getBackendUrl('/rest/countries'), { headers: headers })
      .subscribe(
        value => countriesSubject.next(value.json()),
        error => this.handleError(error),
        () => countriesSubject.complete()
      );
    return countriesSubject.asObservable();
  }

  private handleError(error: Error) {
    console.log('error', error);
    if (error.message === 'No JWT present') {
      console.log('no JWT');
      this.router.go('/login');
    }
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}
