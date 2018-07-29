
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MessagesInfoPage} from './messagesview';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    MessagesInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesInfoPage),
    TranslateModule.forChild()
  ],
  exports: [
    MessagesInfoPage
  ]
})
export class MessagesInfoPageModule {}
