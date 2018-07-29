
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {NotificationsAddPage} from './notificationsadd';

@NgModule({
  declarations: [
    NotificationsAddPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    NotificationsAddPage
  ]
})
export class NotificationsAddPageModule {}
