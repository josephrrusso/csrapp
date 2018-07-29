
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {SmsMessagesAddPage} from './smsMessagesadd';

@NgModule({
  declarations: [
    SmsMessagesAddPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsMessagesAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    SmsMessagesAddPage
  ]
})
export class SmsMessagesAddPageModule {}
