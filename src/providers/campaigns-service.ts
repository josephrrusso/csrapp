
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import {CampaignsModel} from '../models/campaigns.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class CampaignsService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/campaigns'
  }

  index() {    
    return this.authHttp.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View campaigns error", e));
  }

  view(id: number) {
    return this.authHttp.get(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json().campaign;
      })
      .catch(e => console.log("View campaign error", e));
  }

  add(campaign: CampaignsModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.route, campaign)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Create campaign error", e));
  }

  edit(campaign: CampaignsModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.route + '/' + campaign.id, campaign)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update campaign error", e));
  }

  delete(id: number) {
    return this.authHttp.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete campaign error", e));
  }
}
