import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@ngrx/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) {
  }

  public authenticated() {
    return tokenNotExpired();
  }

  public login(username: string, password: string) {
    console.log(username, password);
    localStorage.setItem('id_token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ');
    this.router.go('/hotels');
  }

  public logout() {
    localStorage.removeItem('id_token');
    this.router.go('/');
  }
}
