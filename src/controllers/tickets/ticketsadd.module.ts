
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {TicketsAddPage} from './ticketsadd';

@NgModule({
  declarations: [
    TicketsAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketsAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    TicketsAddPage
  ]
})
export class TicketsAddPageModule {}
