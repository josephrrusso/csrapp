
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {LocationsAddPage} from './add';

@NgModule({
  declarations: [
    LocationsAddPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationsAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    LocationsAddPage
  ]
})
export class LocationsAddPageModule {}
