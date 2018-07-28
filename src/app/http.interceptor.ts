import {Injectable} from "@angular/core";
import { ConnectionBackend, RequestOptions, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Storage} from '@ionic/storage';

let storage = new Storage({});


@Injectable()
export class InterceptedHttp extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {

        super(backend, defaultOptions);

        
    }

    /*
    noauthget(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.fromPromise (
            this.getRequestOptionArgsNoAuth()
        ).mergeMap((options) => { 
            return super.get(url, options) 
        });
    }
    noauthpost(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {   
        return Observable.fromPromise (
            this.getRequestOptionArgsNoAuth()
        ).mergeMap((options) => { return super.post(url, body, options) })
    }
    */

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.fromPromise (
            this.getRequestOptionArgs(options)
        ).mergeMap((options) => { return super.get(url, options) });
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {   
        return Observable.fromPromise (
            this.getRequestOptionArgs(options)
        ).mergeMap((options) => { return super.post(url, body, options) })
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.fromPromise (
            this.getRequestOptionArgs(options)
        ).mergeMap((options) => { 
            return super.put(url, body, options) 
        })
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return Observable.fromPromise (
            this.getRequestOptionArgs(options)
        ).mergeMap((options) => { 
            return super.delete(url, options) 
        })
    }
    
    private updateUrl(req: string) {
        return req;
    }

    showmodal() {
        var existingmodals = document.getElementsByClassName("nointernetmodal");
        if (existingmodals.length == 0) {
            var body = document.getElementsByTagName("body")[0];

            var veil = document.createElement('div');
            veil.setAttribute("style", "position:fixed;top:0px;left:0px;width:100%;height:100%;background-color:rgba(0,0,0,0.7);");
            veil.setAttribute('onclick', 'this.parentNode.removeChild(this);')
            veil.setAttribute('class', 'nointernetmodal')

            var modal = document.createElement('div');
            modal.setAttribute("style", "position:absolute;bottom:0px;left:0px;width:100%;background-color:white;border-top:solid 5px black;");
            //modal.setAttribute('onclick', 'this.parentNode.removeChild(this);')
            modal.setAttribute('class', 'nointernetmodal')

            var header = document.createElement('div');
            header.setAttribute('style', 'font-size: 2.5em;font-weight: bold; color:white; background-color: rgb(25,0,0); text-align: center;')
            header.innerHTML = "NO INTERNET CONNECTION";
            modal.appendChild(header);

            var text = document.createElement('span');
            text.setAttribute('style', 'font-size: 2em; line-height: 55px;')
            text.innerHTML = "Please reconnect and try again.";
            modal.appendChild(text);

            var close = document.createElement('a');
            //close.setAttribute('onclick', 'this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);')
            close.setAttribute('style', 'font-size:3em; background-color:#32db64; border-radius:4px; color: white; font-weight: bold; float:right; margin-right: 20px; margin-top:10px; margin-bottom: 10px; padding: 0px 25px 0px 25px;');
            close.innerHTML = "OK";
            modal.appendChild(close);

            veil.appendChild(modal);
            body.appendChild(veil);
        }
    }

    getRequestOptionArgs(options?: RequestOptionsArgs) {
        return storage.get('id_token')
        .then((token) => {
            
            if (!window.navigator.onLine) {
                // if there is no internet, throw a HttpErrorResponse error
                // since an error is thrown, the function will terminate here
                //return Observable.throw(new HttpErrorResponse({ error: 'Internet is required.' }));
                console.log('no internet')
                //alert("No internet connection detected. Please check internet connection and try again.")

                this.showmodal();

            } else {

            
            /*
            let alert = this.alertCtrl.create({
                title: 'No Internet',
                subTitle: 'Please reconnect to the internet and try again.',
                buttons: [{
                    text: 'OK',
                    handler: () => {
                        alert.dismiss().then(() => {  });
                        return false;
                    }
                }]
            });

            alert.present();
            */
            

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

    getRequestOptionArgsNoAuth(options?: RequestOptionsArgs) {
        return storage.get('id_token')
        .then((token) => {
            if (!window.navigator.onLine) {
                // if there is no internet, throw a HttpErrorResponse error
                // since an error is thrown, the function will terminate here
                //return Observable.throw(new HttpErrorResponse({ error: 'Internet is required.' }));
                console.log('no internet')
                //alert("No internet connection detected. Please check internet connection and try again.")

                this.showmodal();

            } else {

            }
            if (options == null) {
                options = new RequestOptions();
            }

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


    Example of original: 
    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.delete(url, this.getRequestOptionArgs(options));
    }
    */
}