
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FormsEditPage} from './formsedit';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    FormsEditPage,
  ],
  imports: [
    IonicPageModule.forChild(FormsEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    FormsEditPage
  ]
})
export class FormsEditPageModule {}
