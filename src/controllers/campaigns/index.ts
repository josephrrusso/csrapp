
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {CampaignsService} from '../../providers/campaigns-service';
import {CampaignsModel} from '../../models/campaigns.model';

@IonicPage({ name: 'CampaignsPage', segment: 'campaigns-page' })
@Component({
  selector: 'page-campaigns-page',
  templateUrl: '../../pages/campaigns/index.html',
})
export class CampaignsPage extends ProtectedPage {

  public campaigns: any;
  public didclick: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public campaignsService: CampaignsService) {

    super(navCtrl, navParams, storage);
    this.didclick = false;

  }
  
  ionViewWillEnter() {
    this.campaignsService.index()
      .then(campaigns => this.campaigns = campaigns.data)
      .catch(e => console.log("View campaigns error"));
  }

  /*
  ionViewCanLeave(): boolean {
    if (this.didclick) {
      this.didclick = false;
      return true;
    }
    return false;
  }
  */
  
  campaignInfo(campaign: CampaignsModel) {
    this.didclick = true;
    //this.navCtrl.push('CampaignsInfoPage', {campaign: campaign});
    this.navCtrl.setRoot('CampaignsInfoPage', {campaign: campaign});
    /*
      4xx some sort of ios bug here^ It would only show up if I did:
        My Campaigns -> view camapign
        View campaign -> select map and click icon to ticket/location/user view
        UTLO view -> go back
        View campaign -> go back
        ** at this point it would load the campaigns home page and then autopush back into the campaigns view page, but with no campaign selected so it would render a blank map and nothing else
        ** every time I would try to back out, it would auto-redirect forward into the campaign view page. So I use setRoot instead of push and that seems to work now
    */
  }

  notification() {
    this.navCtrl.push('NotificationsPage');
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
}
