
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LocationsInfoPage} from './view';
import {ComponentsModule} from '../../app/components.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    LocationsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationsInfoPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  exports: [
    LocationsInfoPage
  ]
})
export class LocationsInfoPageModule {}
