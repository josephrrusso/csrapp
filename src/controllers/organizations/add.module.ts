
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {OrganizationsAddPage} from './add';

@NgModule({
  declarations: [
    OrganizationsAddPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizationsAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    OrganizationsAddPage
  ]
})
export class OrganizationsAddPageModule {}
