
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import {GroupsModel} from '../models/groups.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class GroupsService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/groups'
  }

  membershipapi(id: number) {    
    return this.http.get(this.cfg.apiUrl + this.route + '/membershipapi/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View groups error", e));
  }

  index() {    
    return this.http.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View groups error", e));
  }

  view(id: number) {
    return this.http.get(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json().group;
      })
      .catch(e => console.log("View group error", e));
  }

  add(group: GroupsModel) {
    return this.http.post(this.cfg.apiUrl + this.route, group)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Create group error", e));
  }

  edit(group: GroupsModel) {
    return this.http.put(this.cfg.apiUrl + this.route + '/' + group.id, group)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update group error", e));
  }

  delete(id: number) {
    return this.http.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete group error", e));
  }
}
