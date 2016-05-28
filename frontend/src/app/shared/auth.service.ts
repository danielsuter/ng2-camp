import {Injectable} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class Auth {

  constructor(private router: Router) {
  }

  public authenticated() {
    return tokenNotExpired();
  }

  public login(username: string, passwor: string) {
    // Show the Auth0 Lock widget
    // this.lock.show({}, (err, profile, token) => {
    //   if (err) {
    //     alert(err);
    //     return;
    //   }
    //   // If authentication is successful, save the items
    //   // in local storage
    //   localStorage.setItem('id_token', token);
    // });
  }

  public logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['Home']);
  }
}
