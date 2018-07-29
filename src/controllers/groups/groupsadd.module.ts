
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {GroupsAddPage} from './groupsadd';

@NgModule({
  declarations: [
    GroupsAddPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupsAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    GroupsAddPage
  ]
})
export class GroupsAddPageModule {}
