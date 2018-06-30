
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import {UsersModel} from '../models/users.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class UsersService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/users'
  }

  index() {    
    return this.authHttp.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View users error", e));
  }

  view(id: number) {
    return this.authHttp.get(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View user error", e));
  }

  add(user: UsersModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.route, user)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Create user error", e));
  }

  edit(user: UsersModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.route + '/' + user.id, user)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update user error", e));
  }

  delete(id: number) {
    return this.authHttp.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete user error", e));
  }
}
