
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TasksInfoPage} from './tasksview';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    TasksInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TasksInfoPage),
    TranslateModule.forChild()
  ],
  exports: [
    TasksInfoPage
  ]
})
export class TasksInfoPageModule {}
