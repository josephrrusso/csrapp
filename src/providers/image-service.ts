import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
import {ImageModel} from '../models/image.model';
import {AuthHttp, JwtHelper, tokenNotExpired} from 'angular2-jwt';
import {Observable} from 'rxjs/Rx';
import *  as AppConfig from '../app/config';

@Injectable()
export class ImageService {

  private cfg: any;
  idToken: string;
  refreshSubscription: any;

  constructor(
    private storage: Storage,
    private http: Http,
    private jwtHelper:JwtHelper,
    private authHttp: AuthHttp) {

    this.cfg = AppConfig.cfg;
    this.storage.get('id_token').then(token => {
        this.idToken = token;
    });

  }

  send(imageData: ImageModel) {
    return this.authHttp.post(this.cfg.apiUrl + '/users/image', imageData)
      .toPromise()
      .then(data => {
        console.log(data)
      })
      .catch(e => console.log("reg error", e));
  }
}
