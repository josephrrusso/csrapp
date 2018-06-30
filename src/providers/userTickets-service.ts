
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import {UserTicketsModel} from '../models/userTickets.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class UserTicketsService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/userTickets'
  }

  index() {    
    return this.authHttp.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View userTickets error", e));
  }

  view(id: number) {
    return this.authHttp.get(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json().userTicket;
      })
      .catch(e => console.log("View userTicket error", e));
  }

  add(userTicket: UserTicketsModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.route, userTicket)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Create userTicket error", e));
  }

  edit(userTicket: UserTicketsModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.route + '/' + userTicket.id, userTicket)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update userTicket error", e));
  }

  delete(id: number) {
    return this.authHttp.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete userTicket error", e));
  }
}
