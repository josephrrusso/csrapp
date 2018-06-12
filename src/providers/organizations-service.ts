
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Storage} from '@ionic/storage';
import {OrganizationsModel} from '../models/organizations.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class OrganizationsService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/organizations'
  }

  index() {    
    return this.authHttp.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View organizations error", e));
  }

  view(id: number) {
    return this.authHttp.get(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json().organization;
      })
      .catch(e => console.log("View organization error", e));
  }

  add(organization: OrganizationsModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.route, organization)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Create organization error", e));
  }

  edit(organization: OrganizationsModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.route + '/' + organization.id, organization)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update organization error", e));
  }

  delete(id: number) {
    return this.authHttp.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete organization error", e));
  }
}
