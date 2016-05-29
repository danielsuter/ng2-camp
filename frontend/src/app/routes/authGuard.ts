import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Guard, Router, TraversalCandidate} from '@ngrx/router';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthGuard implements Guard {
  constructor(private router: Router) {
  }

  protectRoute(candidate: TraversalCandidate) {
    if (!tokenNotExpired()) {
      this.router.go('/login');
      return Observable.of(false);
    }
    return Observable.of(true);
  }
}
