
import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import {TasksModel} from '../models/tasks.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

@Injectable()
export class TasksService {

  private cfg: any;
  private route: any;

  constructor(private authHttp: AuthHttp, private http: Http, private storage: Storage) {

    this.cfg = AppConfig.cfg;
    this.route = '/tasks'
  }

  index() {    
    return this.authHttp.get(this.cfg.apiUrl + this.route)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("View tasks error", e));
  }

  view(id: number) {
    return this.authHttp.get(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json().task;
      })
      .catch(e => console.log("View task error", e));
  }

  add(task: TasksModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.route, task)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("Create task error", e));
  }

  edit(task: TasksModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.route + '/' + task.id, task)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Update task error", e));
  }

  delete(id: number) {
    return this.authHttp.delete(this.cfg.apiUrl + this.route + '/' + id)
      .toPromise()
      .then(rs => {
        return rs.json();
      })
      .catch(e => console.log("Delete task error", e));
  }
}
