
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {NotificationsEditPage} from './notificationsedit';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    NotificationsEditPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    NotificationsEditPage
  ]
})
export class NotificationsEditPageModule {}
