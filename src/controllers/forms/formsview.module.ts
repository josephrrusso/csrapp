
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FormsInfoPage} from './formsview';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    FormsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(FormsInfoPage),
    TranslateModule.forChild()
  ],
  exports: [
    FormsInfoPage
  ]
})
export class FormsInfoPageModule {}
