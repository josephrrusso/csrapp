
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
    this.geolocation.getCurrentPosition({timeout: 30000, enableHighAccuracy: true, maximumAge: 10}).then((position) => {
      return this.http.post(this.cfg.apiUrl + this.route + "/geo", {latitude: position.coords.latitude, longitude: position.coords.longitude, notes:'h '+' '+position.coords.accuracy})
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Geolocation saving error", e));

    }, 
    (err) => {
      var errors = { 
        1: 'Permission denied',
        2: 'Position unavailable',
        3: 'Request timeout'
      };
      //3600000
      this.geolocation.getCurrentPosition({timeout: 30000, enableHighAccuracy: false, maximumAge: 10}).then((position) => {
        return this.http.post(this.cfg.apiUrl + this.route + "/geo", {latitude: position.coords.latitude, longitude: position.coords.longitude, notes:'e1 '+JSON.stringify(err)+' '+errors[err.code]+' l '+' '+position.coords.accuracy})
        .toPromise()
        .then(() => {
          return true;
        })
        .catch(e => console.log("Geolocation saving error", e));

        },

        (err2) => {
          var errors = { 
            1: 'Permission denied',
            2: 'Position unavailable',
            3: 'Request timeout'
          };

          return this.http.post(this.cfg.apiUrl + this.route + "/geo", {latitude: 0, longitude: 0, notes:' e2 '+JSON.stringify(err2)+' '+errors[err2.code]})
          .toPromise()
          .then(() => {
            return true;
          })
          .catch(e => console.log("Geolocation saving error", e));
        });
    });
  }
}
