
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http, Headers, RequestOptions} from '@angular/http';
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
    return this.authHttp.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View tickets error", e));
  }

  view(id: number) {
    return this.authHttp.get(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json().ticket;
      })
      .catch(e => console.log("View ticket error", e));
  }

  add(ticket: TicketsModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.route, ticket)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Create ticket error", e));
  }

  edit(ticket: TicketsModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.route + '/' + ticket.id, ticket)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update ticket error", e));
  }

  delete(id: number) {
    return this.authHttp.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete ticket error", e));
  }
}
