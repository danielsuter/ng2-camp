import {Injectable} from '@angular/core';
import {Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Router} from '@ngrx/router';
import {AuthHttp} from 'angular2-jwt';
import {UrlProvider} from './urlProvider';

@Injectable()
export class CrudService {

  constructor(private authHttp: AuthHttp, private router: Router) {
  }

  public get<T>(url: string): Observable<T> {
    return this.wrapCallAndExtract(this.authHttp.get(UrlProvider.getBackendUrl(url),
      this.createRequestOptions()));
  }

  public post<T>(url: string, data: T): Observable<T> {
    let json = JSON.stringify(data);
    return this.wrapCallAndExtract(this.authHttp.post(UrlProvider.getBackendUrl(url),
      json,
      this.createRequestOptions()));
  }

  public put<T>(url: string, data: T): Observable<T> {
    let json = JSON.stringify(data);
    return this.wrapCallAndExtract(this.authHttp.put(UrlProvider.getBackendUrl(url),
      json,
      this.createRequestOptions()));
  }

  public delete(url: string): Observable<Response> {
    return this.wrapCall(this.authHttp.delete(UrlProvider.getBackendUrl(url),
      this.createRequestOptions()));
  }

  private wrapCallAndExtract<T>(observable: Observable<Response>): Observable<T> {
    return this.wrapCall(observable, this.extractJson);
  }

  private wrapCall<T>(observable: Observable<Response>,
                      extractor: (n: Response) => any = n => n): Observable<T> {
    let subject = new Subject<T>();
    observable.subscribe(
      value => subject.next(extractor(value)),
      error => {
        this.handleError(error);
        subject.error(error);
      },
      () => subject.complete()
    );
    return subject.asObservable();
  }

  private createRequestOptions(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({headers: headers});
  }

  private extractJson(res: Response): any {
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
