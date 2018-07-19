import {Injectable} from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Storage} from '@ionic/storage';
import { AlertController } from 'ionic-angular';

let storage = new Storage({});


@Injectable()
export class InterceptedHttp extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, public alertCtrl: AlertController) {

        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.fromPromise (
            this.getRequestOptionArgs()
        ).mergeMap((options) => { return super.get(url, options) });
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {   
        return Observable.fromPromise (
            this.getRequestOptionArgs()
        ).mergeMap((options) => { return super.post(url, body, options) })
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.fromPromise (
            this.getRequestOptionArgs()
        ).mergeMap((options) => { return super.put(url, body, options) })
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.delete(url, this.getRequestOptionArgs(options));
    }
    
    private updateUrl(req: string) {
        return req;
    }

    getRequestOptionArgs(options?: RequestOptionsArgs) {
        return storage.get('id_token')
        .then((token) => {
            if (!window.navigator.onLine) {
                // if there is no internet, throw a HttpErrorResponse error
                // since an error is thrown, the function will terminate here
                //return Observable.throw(new HttpErrorResponse({ error: 'Internet is required.' }));
                console.log('no internet')
                alert("No internet connection detected. Please check internet connection and try again.")

            } else {

            }
            if (options == null) {
                options = new RequestOptions();
            }
            if (options.headers == null) {
                options.headers = new Headers();
            }
            if (token !== null) {
                options.headers.append('Authorization','Bearer ' + token);  
            }
            options.headers.append('Content-Type', 'application/json');

            return options;  
        })
    }

    /*
    private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Authorization', 'Bearer ' + this.idToken);
        console.log(this.idToken);

        return options;
    }
    */
}