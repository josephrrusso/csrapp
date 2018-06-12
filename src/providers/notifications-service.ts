
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Storage} from '@ionic/storage';
import {NotificationsModel} from '../models/notifications.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class NotificationsService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/notifications'
  }

  index() {    
    return this.authHttp.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View notifications error", e));
  }

  view(id: number) {
    return this.authHttp.get(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json().notification;
      })
      .catch(e => console.log("View notification error", e));
  }

  add(notification: NotificationsModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.route, notification)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Create notification error", e));
  }

  edit(notification: NotificationsModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.route + '/' + notification.id, notification)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update notification error", e));
  }

  delete(id: number) {
    return this.authHttp.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete notification error", e));
  }
}
