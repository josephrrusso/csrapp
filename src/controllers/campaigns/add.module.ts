
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {CampaignsAddPage} from './add';

@NgModule({
  declarations: [
    CampaignsAddPage,
  ],
  imports: [
    IonicPageModule.forChild(CampaignsAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    CampaignsAddPage
  ]
})
export class CampaignsAddPageModule {}
