
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Storage} from '@ionic/storage';
import {GeoModel} from '../models/geo.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class GeoService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/users'
  }

  geo(geo: GeoModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.route + "/geo", geo)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Geolocation saving error", e));
  }
}
