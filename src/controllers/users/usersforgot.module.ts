import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ForgotPage} from './usersforgot';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    ForgotPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotPage),
    TranslateModule.forChild()
  ],
  exports: [
    ForgotPage
  ]
})
export class ForgotPageModule {}
