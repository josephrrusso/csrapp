
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UserTicketsEditPage} from './userTicketsedit';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    UserTicketsEditPage,
  ],
  imports: [
    IonicPageModule.forChild(UserTicketsEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    UserTicketsEditPage
  ]
})
export class UserTicketsEditPageModule {}
