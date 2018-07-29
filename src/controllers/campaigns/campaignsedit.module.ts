
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CampaignsEditPage} from './campaignsedit';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    CampaignsEditPage,
  ],
  imports: [
    IonicPageModule.forChild(CampaignsEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    CampaignsEditPage
  ]
})
export class CampaignsEditPageModule {}
