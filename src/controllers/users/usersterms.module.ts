
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UsersTermsPage} from './usersterms';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    UsersTermsPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersTermsPage),
    TranslateModule.forChild()
  ],
  exports: [
    UsersTermsPage
  ]
})
export class UsersTermsPageModule {}
