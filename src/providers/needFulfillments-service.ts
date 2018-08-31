
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import {NeedFulfillmentsModel} from '../models/needFulfillments.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class NeedFulfillmentsService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/needFulfillments'
  }

  index() {    
    return this.http.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View nf error", e));
  }

  view(id: number, campaign_id: number) {
    return this.http.get(this.cfg.apiUrl + this.route + '/' + id + '?scope_campaigns=' + campaign_id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View nf error", e));
  }

  add(need_id: number, group_id: number) {
    return this.http.post(this.cfg.apiUrl + this.route + '/add/' + need_id + "/" + group_id, {})
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Create nf error", e));
  }

  edit() {
    return this.http.put(this.cfg.apiUrl + this.route, {})
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update nf error", e));
  }

  delete(id: number) {
    return this.http.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete nf error", e));
  }

  advance(id: number, formData: any, campaign_id: number) {
    return this.http.post(this.cfg.apiUrl + this.route + '/advance/' + id + '?scope_campaigns=' + campaign_id, formData)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Advance nf error", e));
  }
}
