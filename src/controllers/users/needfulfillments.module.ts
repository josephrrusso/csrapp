
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {NeedFulfillmentsPage} from './needfulfillments';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    NeedFulfillmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(NeedFulfillmentsPage),
    TranslateModule.forChild()
  ],
  exports: [
    NeedFulfillmentsPage
  ]
})
export class NeedFulfillmentsPageModule {}
