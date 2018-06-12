
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LocationsPage} from './index';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    LocationsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationsPage),
    TranslateModule.forChild()
  ],
  exports: [
    LocationsPage
  ]
})
export class LocationsPageModule {}
