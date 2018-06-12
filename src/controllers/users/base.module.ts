import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BasePage} from './base';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    BasePage,
  ],
  imports: [
    IonicPageModule.forChild(BasePage),
    TranslateModule.forChild()
  ],
  exports: [
    BasePage
  ]
})
export class BasePageModule {}
