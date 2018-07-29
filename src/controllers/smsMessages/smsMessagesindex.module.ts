
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SmsMessagesPage} from './smsMessagesindex';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    SmsMessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsMessagesPage),
    TranslateModule.forChild()
  ],
  exports: [
    SmsMessagesPage
  ]
})
export class SmsMessagesPageModule {}
