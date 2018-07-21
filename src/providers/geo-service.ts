
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class GeoService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage, public geolocation: Geolocation) {

    this.cfg = AppConfig.cfg;
    this.route = '/users'
  }

  geo() {
    this.geolocation.getCurrentPosition().then((position) => {

      return this.http.post(this.cfg.apiUrl + this.route + "/geo", {latitude: position.coords.latitude, longitude: position.coords.longitude})
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Geolocation saving error", e));

    }, 
    (err) => {

      /*
      return this.http.post(this.cfg.apiUrl + this.route + "/geo", {latitude: 0, longitude: 0})
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Geolocation saving error", e));
      */
      
    });
  }
}
