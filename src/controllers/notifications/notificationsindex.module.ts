
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {NotificationsPage} from './notificationsindex';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    NotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsPage),
    TranslateModule.forChild()
  ],
  exports: [
    NotificationsPage
  ]
})
export class NotificationsPageModule {}
