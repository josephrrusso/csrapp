
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GroupsInfoPage} from './view';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    GroupsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupsInfoPage),
    TranslateModule.forChild()
  ],
  exports: [
    GroupsInfoPage
  ]
})
export class GroupsInfoPageModule {}
