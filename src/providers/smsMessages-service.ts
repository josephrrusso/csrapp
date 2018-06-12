
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Storage} from '@ionic/storage';
import {SmsMessagesModel} from '../models/smsMessages.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class SmsMessagesService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/smsMessages'
  }

  index() {    
    return this.authHttp.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View smsMessages error", e));
  }

  view(id: number) {
    return this.authHttp.get(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json().smsMessage;
      })
      .catch(e => console.log("View smsMessage error", e));
  }

  add(smsMessage: SmsMessagesModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.route, smsMessage)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Create smsMessage error", e));
  }

  edit(smsMessage: SmsMessagesModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.route + '/' + smsMessage.id, smsMessage)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update smsMessage error", e));
  }

  delete(id: number) {
    return this.authHttp.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete smsMessage error", e));
  }
}
