
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {CampaignsService} from '../../providers/campaigns-service';
import {CampaignsModel} from '../../models/campaigns.model';

@IonicPage({ segment: 'campaigns-edit-page' })
@Component({
  selector: 'page-campaign-edit-page',
  templateUrl: '../../pages/campaigns/edit.html',
})
export class CampaignsEditPage extends ProtectedPage {

  private campaignData: FormGroup;
  private campaign: CampaignsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public campaignsService: CampaignsService) {

    super(navCtrl, navParams, storage);

    this.campaign = navParams.get('campaign');


    this.campaignData = this.formBuilder.group({
         id: [this.campaign.id, Validators.required],
         active: [this.campaign.active, Validators.required],
         status: [this.campaign.status, Validators.required],
         created: [this.campaign.created, Validators.required],
         modified: [this.campaign.modified, Validators.required],
         created_epoch: [this.campaign.created_epoch, Validators.required],
         modified_epoch: [this.campaign.modified_epoch, Validators.required],
         owner: [this.campaign.owner, Validators.required],
         ownerg: [this.campaign.ownerg, Validators.required],
         organization_id: [this.campaign.organization_id, Validators.required],
         name: [this.campaign.name, Validators.required],
         lat_max: [this.campaign.lat_max, Validators.required],
         lat_min: [this.campaign.lat_min, Validators.required],
         lng_max: [this.campaign.lng_max, Validators.required],
         lng_min: [this.campaign.lng_min, Validators.required],
         security_profile_id: [this.campaign.security_profile_id, Validators.required],
         home_links: [this.campaign.home_links, Validators.required],
         
    });
  }

  process() {

    let updatedCampaigns = Object.assign(this.campaign, this.campaignData.value);

    this.campaignsService.edit(updatedCampaigns)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("Add campaign error", e));
  }
}
