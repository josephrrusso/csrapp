
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TicketsPage} from './index';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    TicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketsPage),
    TranslateModule.forChild()
  ],
  exports: [
    TicketsPage
  ]
})
export class TicketsPageModule {}
