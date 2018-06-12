
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UserTicketsPage} from './index';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    UserTicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserTicketsPage),
    TranslateModule.forChild()
  ],
  exports: [
    UserTicketsPage
  ]
})
export class UserTicketsPageModule {}
