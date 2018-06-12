
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {UsersAddPage} from './add';

@NgModule({
  declarations: [
    UsersAddPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    UsersAddPage
  ]
})
export class UsersAddPageModule {}
