
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {UserTicketsAddPage} from './add';

@NgModule({
  declarations: [
    UserTicketsAddPage,
  ],
  imports: [
    IonicPageModule.forChild(UserTicketsAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    UserTicketsAddPage
  ]
})
export class UserTicketsAddPageModule {}
