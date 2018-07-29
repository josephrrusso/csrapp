
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MessagesEditPage} from './messagesedit';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    MessagesEditPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    MessagesEditPage
  ]
})
export class MessagesEditPageModule {}
