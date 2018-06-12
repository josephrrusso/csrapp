
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TicketsEditPage} from './edit';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    TicketsEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketsEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    TicketsEditPage
  ]
})
export class TicketsEditPageModule {}
