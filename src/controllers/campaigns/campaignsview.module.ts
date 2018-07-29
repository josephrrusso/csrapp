
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CampaignsInfoPage} from './campaignsview';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    CampaignsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CampaignsInfoPage),
    TranslateModule.forChild()
  ],
  exports: [
    CampaignsInfoPage
  ]
})
export class CampaignsInfoPageModule {}
