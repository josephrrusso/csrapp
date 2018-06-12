import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';
import {MyApp} from './app.component';
import {HttpModule, Http} from '@angular/http';
import {AuthHttp, AuthConfig,JwtHelper} from 'angular2-jwt';
import {Storage} from '@ionic/storage';
import {GeoService} from '../providers/geo-service';
import {AuthService} from '../providers/auth-service';
import {ImageService} from '../providers/image-service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import {CampaignsService} from '../providers/campaigns-service';
import {FormsService} from '../providers/forms-service';
import {GroupsService} from '../providers/groups-service';
import {LocationsService} from '../providers/locations-service';
import {MessagesService} from '../providers/messages-service';
import {NotificationsService} from '../providers/notifications-service';
import {OrganizationsService} from '../providers/organizations-service';
import {SmsMessagesService} from '../providers/smsMessages-service';
import {TasksService} from '../providers/tasks-service';
import {TicketsService} from '../providers/tickets-service';
import {UsersService} from '../providers/users-service';
import {UserTicketsService} from '../providers/userTickets-service';

let storage = new Storage({});

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}, {'Content-Type': 'application/json'}],
    tokenGetter: (() => storage.get('id_token')),
    tokenName: 'id_token'
  }), http);
}

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
  	Geolocation,
    StatusBar,
    JwtHelper,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    FileTransfer,
    FileTransferObject,
    File,
    FilePath,
    Camera,
    AuthService,
    GeoService,
    ImageService,
	GroupsService,
	LocationsService,
	UsersService,
	TasksService,
	CampaignsService,
	MessagesService,
	SmsMessagesService,
	OrganizationsService,
	NotificationsService,
	FormsService,
	TicketsService,
	UserTicketsService
  ]
})
export class AppModule {}
