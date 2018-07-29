
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OrganizationsEditPage} from './organizationsedit';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    OrganizationsEditPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizationsEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    OrganizationsEditPage
  ]
})
export class OrganizationsEditPageModule {}
