
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TicketsInfoPage} from './view';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    TicketsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketsInfoPage),
    TranslateModule.forChild()
  ],
  exports: [
    TicketsInfoPage
  ]
})
export class TicketsInfoPageModule {}
