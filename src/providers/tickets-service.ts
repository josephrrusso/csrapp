
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import {TicketsModel} from '../models/tickets.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class TicketsService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/tickets'
  }

  index() {    
    return this.http.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View tickets error", e));
  }

  view(id: number, campaign_id: number) {
    return this.http.get(this.cfg.apiUrl + this.route + '/' + id + '?scope_campaigns=' + campaign_id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View ticket error", e));
  }

  add(ticket: TicketsModel) {
    return this.http.post(this.cfg.apiUrl + this.route, ticket)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Create ticket error", e));
  }

  edit(ticket: TicketsModel) {
    return this.http.put(this.cfg.apiUrl + this.route + '/' + ticket.id, ticket)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update ticket error", e));
  }

  delete(id: number) {
    return this.http.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete ticket error", e));
  }
}
