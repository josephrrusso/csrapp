
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TasksPage} from './index';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    TasksPage,
  ],
  imports: [
    IonicPageModule.forChild(TasksPage),
    TranslateModule.forChild()
  ],
  exports: [
    TasksPage
  ]
})
export class TasksPageModule {}
