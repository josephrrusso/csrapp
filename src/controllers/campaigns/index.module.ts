
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CampaignsPage} from './index';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    CampaignsPage,
  ],
  imports: [
    IonicPageModule.forChild(CampaignsPage),
    TranslateModule.forChild()
  ],
  exports: [
    CampaignsPage
  ]
})
export class CampaignsPageModule {}
