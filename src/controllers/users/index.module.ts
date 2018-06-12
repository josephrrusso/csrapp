
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UsersPage} from './index';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    UsersPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
    TranslateModule.forChild()
  ],
  exports: [
    UsersPage
  ]
})
export class UsersPageModule {}
