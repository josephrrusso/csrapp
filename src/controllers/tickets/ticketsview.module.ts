
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TicketsInfoPage} from './ticketsview';
import {ComponentsModule} from '../../app/components.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    TicketsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketsInfoPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  exports: [
    TicketsInfoPage
  ]
})
export class TicketsInfoPageModule {}
