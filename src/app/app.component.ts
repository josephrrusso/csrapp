import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AuthService} from '../providers/auth-service';
import {TranslateService} from '@ngx-translate/core';
import {GeoService} from '../providers/geo-service';
import { AlertController } from 'ionic-angular';

import {Observable} from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'CampaignsPage';

  pages: Array<{title: string, component: any, method?: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthService,
    public geoService: GeoService,
    translate: TranslateService,
    alertCtrl: AlertController
    ) {

    this.initializeApp();

    translate.setDefaultLang('en');

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'page.campaigns.list', component: 'CampaignsPage'},
      {title: 'page.needFulfillments.list', component: 'NeedFulfillmentsPage'},
      {title: 'page.logout', component: 'LoginPage', method: 'logout'},
      {title: 'page.users.privacy', component: 'UsersPrivacyPage'},
      {title: 'page.users.terms', component: 'UsersTermsPage'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.authService.startupTokenRefresh();

      Observable.interval(60000).subscribe(()=>{
          //this.functionYouWantToCall();
          this.geoService.geo();
      });

      
      /*
      setInterval(() => { 
         this.geoService.geo();
         console.log('app.component')
      }, 20000);
      */
      
    });
  }

  openPage(page) {

    if (page.method && page.method === 'logout') {
      this.authService.logout();
    }

    this.nav.setRoot(page.component);
  }

}
