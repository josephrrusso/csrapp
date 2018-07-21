
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UsersInfoPage} from './view';
import {ComponentsModule} from '../../app/components.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    UsersInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersInfoPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  exports: [
    UsersInfoPage
  ]
})
export class UsersInfoPageModule {}
