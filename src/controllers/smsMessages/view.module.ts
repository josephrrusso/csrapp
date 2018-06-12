
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SmsMessagesInfoPage} from './view';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    SmsMessagesInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsMessagesInfoPage),
    TranslateModule.forChild()
  ],
  exports: [
    SmsMessagesInfoPage
  ]
})
export class SmsMessagesInfoPageModule {}
