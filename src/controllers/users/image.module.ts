import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ImagePage} from './image';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    ImagePage,
  ],
  imports: [
    IonicPageModule.forChild(ImagePage),
    TranslateModule.forChild()
  ],
  exports: [
    ImagePage
  ]
})
export class ImagePageModule {}
