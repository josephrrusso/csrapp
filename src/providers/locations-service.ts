
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Storage} from '@ionic/storage';
import {LocationsModel} from '../models/locations.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class LocationsService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/locations'
  }

  index() {    
    return this.authHttp.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View locations error", e));
  }

  view(id: number) {
    return this.authHttp.get(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json().location;
      })
      .catch(e => console.log("View location error", e));
  }

  add(location: LocationsModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.route, location)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Create location error", e));
  }

  edit(location: LocationsModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.route + '/' + location.id, location)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update location error", e));
  }

  delete(id: number) {
    return this.authHttp.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete location error", e));
  }
}
