import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
import {UsersModel} from '../models/users.model';
import {CredentialsModel} from '../models/credentials.model';
import {AuthHttp, JwtHelper, tokenNotExpired} from 'angular2-jwt';
import {Observable} from 'rxjs/Rx';
import *  as AppConfig from '../app/config';

@Injectable()
export class AuthService {

  private cfg: any;
  idToken: string;
  refreshSubscription: any;


  constructor(
    private storage: Storage,
    private http: Http,
    private jwtHelper:JwtHelper,
    private authHttp: AuthHttp) {

    this.cfg = AppConfig.cfg;
    this.storage.get('id_token').then(token => {
        this.idToken = token;
    });

  }

  register(userData: UsersModel) {

    return this.http.post(this.cfg.apiUrl + this.cfg.user.register, userData)
      .toPromise()
      .then(data => {
        let rs = data.json();
        return rs;

        //this.saveData(data)
        //this.idToken = rs.token;
        //this.scheduleRefresh();
      })
      .catch(e => console.log("reg error", e));


  }

  login(credentials: CredentialsModel) {

    return this.http.post(this.cfg.apiUrl + this.cfg.user.login, credentials)
      .toPromise()
      .then(data => {
         let rs = data.json();
         return rs;

         //this.saveData(data);
         //this.idToken = rs.data.token;
         //this.scheduleRefresh();
         //this.getNewJwt();
      })
      .catch(e => console.log('login error', e));
  }

  logout() {
    // stop function of auto refesh
    this.storage.remove('user');
    this.storage.remove('id_token');
    this.storage.remove('expiry');
  }

  isValid() {
    return tokenNotExpired();
  }

  /*
  saveData(data: any) {

    let rs = data.json();

    console.log(rs);

    this.storage.set("user", rs.data.user);
    this.storage.set("id_token", rs.data.token);
    this.storage.set("expiry", rs.exp);
  }
  */
}
