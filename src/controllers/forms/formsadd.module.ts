
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {FormsAddPage} from './formsadd';

@NgModule({
  declarations: [
    FormsAddPage,
  ],
  imports: [
    IonicPageModule.forChild(FormsAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    FormsAddPage
  ]
})
export class FormsAddPageModule {}
