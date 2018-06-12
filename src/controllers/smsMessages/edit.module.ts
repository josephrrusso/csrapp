
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SmsMessagesEditPage} from './edit';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    SmsMessagesEditPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsMessagesEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    SmsMessagesEditPage
  ]
})
export class SmsMessagesEditPageModule {}
