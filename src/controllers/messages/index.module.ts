
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MessagesPage} from './index';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    MessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesPage),
    TranslateModule.forChild()
  ],
  exports: [
    MessagesPage
  ]
})
export class MessagesPageModule {}
