
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {TasksAddPage} from './tasksadd';

@NgModule({
  declarations: [
    TasksAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TasksAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    TasksAddPage
  ]
})
export class TasksAddPageModule {}
