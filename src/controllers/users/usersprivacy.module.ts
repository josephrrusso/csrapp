
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UsersPrivacyPage} from './usersprivacy';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    UsersPrivacyPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersPrivacyPage),
    TranslateModule.forChild()
  ],
  exports: [
    UsersPrivacyPage
  ]
})
export class UsersPrivacyPageModule {}
