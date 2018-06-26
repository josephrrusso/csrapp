
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {CampaignsService} from '../../providers/campaigns-service';
import {CampaignsModel} from '../../models/campaigns.model';

@IonicPage()
@Component({
  selector: 'page-campaigns-page',
  templateUrl: '../../pages/campaigns/index.html',
})
export class CampaignsPage extends ProtectedPage {

  public campaigns: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public campaignsService: CampaignsService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.campaignsService.index()
      .then(campaigns => this.campaigns = campaigns.data)
      .catch(e => console.log("View campaigns error", e));
  }
  
  campaignInfo(campaign: CampaignsModel) {
    this.navCtrl.push('CampaignsInfoPage', {campaign: campaign});
  }

  notification() {
    this.navCtrl.push('NotificationsPage');
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
}
