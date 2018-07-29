
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UsersEditPage} from './usersedit';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    UsersEditPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    UsersEditPage
  ]
})
export class UsersEditPageModule {}
