import {XHRBackend, Http, RequestOptions} from "@angular/http";
import {AuthHttp, AuthConfig,JwtHelper} from 'angular2-jwt';
import {Storage} from '@ionic/storage';
import {InterceptedAuthHttp} from "./authhttp.interceptor";



let storage = new Storage({});

export function authHttpFactory(http) {
  //return new InterceptedAuthHttp(
	  return new AuthHttp(
	  	new AuthConfig({
	    noJwtError: true,
	    globalHeaders: [{'Accept': 'application/json'}, {'Content-Type': 'application/json'}],
	    tokenGetter: (() => storage.get('id_token')),
	    tokenName: 'id_token'
	  }), http);
  //);
}