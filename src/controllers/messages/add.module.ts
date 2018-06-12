
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {MessagesAddPage} from './add';

@NgModule({
  declarations: [
    MessagesAddPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    MessagesAddPage
  ]
})
export class MessagesAddPageModule {}
