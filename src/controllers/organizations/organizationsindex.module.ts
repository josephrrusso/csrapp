
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OrganizationsPage} from './organizationsindex';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    OrganizationsPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizationsPage),
    TranslateModule.forChild()
  ],
  exports: [
    OrganizationsPage
  ]
})
export class OrganizationsPageModule {}
