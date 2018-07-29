
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OrganizationsInfoPage} from './organizationsview';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    OrganizationsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizationsInfoPage),
    TranslateModule.forChild()
  ],
  exports: [
    OrganizationsInfoPage
  ]
})
export class OrganizationsInfoPageModule {}
