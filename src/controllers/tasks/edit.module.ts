
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TasksEditPage} from './edit';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    TasksEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TasksEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    TasksEditPage
  ]
})
export class TasksEditPageModule {}
