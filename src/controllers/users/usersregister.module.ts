
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UsersRegisterPage} from './usersregister';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    UsersRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersRegisterPage),
    TranslateModule.forChild()
  ],
  exports: [
    UsersRegisterPage
  ]
})
export class UsersRegisterPageModule {}
