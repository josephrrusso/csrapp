
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {NotificationsInfoPage} from './view';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    NotificationsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsInfoPage),
    TranslateModule.forChild()
  ],
  exports: [
    NotificationsInfoPage
  ]
})
export class NotificationsInfoPageModule {}
