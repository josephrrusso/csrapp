import {XHRBackend, Http, RequestOptions} from "@angular/http";
import {InterceptedHttp} from "./http.interceptor";
import {Storage} from '@ionic/storage';
import { AlertController } from 'ionic-angular';



export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, alertCtrl: AlertController): Http {
    return new InterceptedHttp(xhrBackend, requestOptions, alertCtrl);
}