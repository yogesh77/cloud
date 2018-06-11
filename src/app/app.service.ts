import { Inject, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';
@Injectable()
export class TokenService {
  private authenticationToken = '';
  constructor() {  }
  /**
   * [setToken Sets the value of the authentication token]
   * @param token The token value to be set as the authentication token
   */
  setToken(token: string) { this.authenticationToken = token; }
  /**
   * [getToken Fetches the value of the authentication token and returns it]
   */
  getToken() { return this.authenticationToken; }

}

@Injectable()
export class RefreshService {
  private url = this.API_END_POINT + 'aaa' + '/refresh?rememberMe=' + 'false';
  private local_url = this.API_END_POINT + 'aaa' + '/refresh?rememberMe=' + 'true';
  constructor(private http: Http, private tokenService: TokenService,
    @Inject('API_END_POINT') private API_END_POINT: string) { }

  getRefresh(token: any): Promise<any> {
    const headers = new Headers({ Authorization: 'Bearer ' + token });
   return this.http.post(this.url, '', { headers })
      .toPromise()
      .then((res) => res)
      .catch(this.handleError);
      }
  getLocalRefresh(token: any): Promise<any> {
    const headers = new Headers({ Authorization: 'Bearer ' + token });
    return this.http.post(this.local_url, '', { headers })
      .toPromise()
      .then((res) => res)
      .catch(this.handleError);
      }
  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }
}

@Injectable()
export class CookieService {
  constructor() {
}
/**
 * [setCookie Sets the value in the local or session storage based on remember me's value]
 * @param key Key part of the key value pair in the storage
 * @param value Value part of the key value pair in the storage
 * @param rememberMe Value of the remember me parameter when user logged in
 */
  setCookie(key: any, value: any, rememberMe: any) {
     if (rememberMe === true) {
      localStorage.setItem (key, value);
    } else {
      sessionStorage.setItem (key, value);
    }
  }
 /**
  * [getCookie Fetches the value from the storage based on the key and returns it]
  * @param key The key part of the key value pair in the storage
  */
  getCookie(key: any): any {
   const loginTime_Session = sessionStorage.getItem('Login-Time-Session');
   const expiryDuration_Session = sessionStorage.getItem('Token-Expiry-Session');
   const loginTime_Local = localStorage.getItem('Login-Time-Local');
   const expiryDuration_Local = localStorage.getItem('Token-Expiry-Local');
   if (this.checkExpiryTime(loginTime_Session, expiryDuration_Session , false)) { // Call for token expiry check in the session storage
        return sessionStorage.getItem(key);
   }
   if (this.checkExpiryTime(loginTime_Local, expiryDuration_Local , true)) { // Call for token expiry check in the local storage
        return localStorage.getItem(key);
    }
  }
/**
 * [checkExpiryTime Checks whether the token has expired or not]
 * @param loginTime Time at which the user logged in
 * @param expiryDuration Expiry time of the token
 * @param rememberMe True if Remember Me is selected, false otherwise
 */
checkExpiryTime(loginTime: any, expiryDuration: any, rememberMe: boolean) {
  const currenttime = moment().format('YYYY-MM-DD hh:mm:ss A');
  const logintime = moment(new Date(loginTime));
  const currentTime = moment(new Date(currenttime));
  if (rememberMe === false) { // Checking token expiry for the session storage
    if (currentTime.diff(logintime, 'second') <= Number(expiryDuration)) {
      return true;
    } else {
      return false;
      }
  }
  if (rememberMe === true) { // Checking token expiry for the local storage
     if (currentTime.diff(logintime, 'second') <= Number(expiryDuration)) {
      return true;
    } else {
      return false;
    }
  }
}
/**
  * [deleteCookie Deletes the value from the local storage based on the key]
  * @param key The key part of the key value pair in the local storage
  */
deleteCookie(key: string) {
    localStorage.removeItem(key); /* Deletion required just for local storage
    as session storage is cleared out automatically when the session expires */
  }
}
