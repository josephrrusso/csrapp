
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Storage} from '@ionic/storage';
import {MessagesModel} from '../models/messages.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class MessagesService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/messages'
  }

  index() {    
    return this.authHttp.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View messages error", e));
  }

  view(id: number) {
    return this.authHttp.get(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json().message;
      })
      .catch(e => console.log("View message error", e));
  }

  add(message: MessagesModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.route, message)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Create message error", e));
  }

  edit(message: MessagesModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.route + '/' + message.id, message)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update message error", e));
  }

  delete(id: number) {
    return this.authHttp.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete message error", e));
  }
}
