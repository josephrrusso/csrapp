
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LocationsEditPage} from './locationsedit';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    LocationsEditPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationsEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    LocationsEditPage
  ]
})
export class LocationsEditPageModule {}
