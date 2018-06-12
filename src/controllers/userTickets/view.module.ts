
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UserTicketsInfoPage} from './view';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    UserTicketsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(UserTicketsInfoPage),
    TranslateModule.forChild()
  ],
  exports: [
    UserTicketsInfoPage
  ]
})
export class UserTicketsInfoPageModule {}
