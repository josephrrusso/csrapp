
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import {FormsModel} from '../models/forms.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class FormsService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/forms'
  }

  index() {    
    return this.http.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View forms error", e));
  }

  view(id: number) {
    return this.http.get(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json().form;
      })
      .catch(e => console.log("View form error", e));
  }

  add(form: FormsModel) {
    return this.http.post(this.cfg.apiUrl + this.route, form)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Create form error", e));
  }

  edit(form: FormsModel) {
    return this.http.put(this.cfg.apiUrl + this.route + '/' + form.id, form)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update form error", e));
  }

  delete(id: number) {
    return this.http.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete form error", e));
  }
}
