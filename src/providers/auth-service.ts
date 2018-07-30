import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
import {UsersModel} from '../models/users.model';
import {CredentialsModel} from '../models/credentials.model';
import {AuthHttp, JwtHelper, tokenNotExpired} from 'angular2-jwt';
//import {Observable} from 'rxjs/Rx';
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
      .catch(e => {
        console.log('login error', e)
        this.showmodal();
      });
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


  showmodal() {
    var existingmodals = document.getElementsByClassName("nointernetmodal");
    if (existingmodals.length == 0) {
        var body = document.getElementsByTagName("body")[0];

        var veil = document.createElement('div');
        veil.setAttribute("style", "position:fixed;top:0px;left:0px;width:100%;height:100%;background-color:rgba(0,0,0,0.7);");
        veil.setAttribute('onclick', 'this.parentNode.removeChild(this);')
        veil.setAttribute('class', 'nointernetmodal')

        var modal = document.createElement('div');
        modal.setAttribute("style", "position:absolute;bottom:0px;left:0px;width:100%;background-color:white;border-top:solid 5px black;");
        //modal.setAttribute('onclick', 'this.parentNode.removeChild(this);')
        modal.setAttribute('class', 'nointernetmodal')

        var header = document.createElement('div');
        header.setAttribute('style', 'font-size: 2.5em;font-weight: bold; color:white; background-color: rgb(25,0,0); text-align: center;')
        header.innerHTML = "Login Error";
        modal.appendChild(header);

        var text = document.createElement('span');
        text.setAttribute('style', 'font-size: 2em; line-height: 55px;')
        text.innerHTML = "Is this the correct password?";
        modal.appendChild(text);

        var close = document.createElement('a');
        //close.setAttribute('onclick', 'this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);')
        close.setAttribute('style', 'font-size:3em; background-color:#32db64; border-radius:4px; color: white; font-weight: bold; float:right; margin-right: 20px; margin-top:10px; margin-bottom: 10px; padding: 0px 25px 0px 25px;');
        close.innerHTML = "Close";
        modal.appendChild(close);

        veil.appendChild(modal);
        body.appendChild(veil);
    }
  }

}
