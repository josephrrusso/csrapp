
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GroupsEditPage} from './edit';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    GroupsEditPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupsEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    GroupsEditPage
  ]
})
export class GroupsEditPageModule {}
