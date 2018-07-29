
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {CampaignsService} from '../../providers/campaigns-service';

@IonicPage({ segment: 'campaigns-add-page' })
@Component({
  selector: 'page-campaign-add-page',
  templateUrl: '../../pages/campaigns/add.html',
})
export class CampaignsAddPage extends ProtectedPage {

  private campaignData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public campaignsService: CampaignsService) {

    super(navCtrl, navParams, storage);

    this.campaignData = this.formBuilder.group({
       id: ['', Validators.required],
         active: ['', Validators.required],
         status: ['', Validators.required],
         created: ['', Validators.required],
         modified: ['', Validators.required],
         created_epoch: ['', Validators.required],
         modified_epoch: ['', Validators.required],
         owner: ['', Validators.required],
         ownerg: ['', Validators.required],
         organization_id: ['', Validators.required],
         name: ['', Validators.required],
         lat_max: ['', Validators.required],
         lat_min: ['', Validators.required],
         lng_max: ['', Validators.required],
         lng_min: ['', Validators.required],
         security_profile_id: ['', Validators.required],
         home_links: ['', Validators.required],
         
    });
  }

  process() {
    this.campaignsService.add(this.campaignData.value)
      .then(() => this.navCtrl.push('CampaignsPage'))
      .catch((e) => console.log("Add campaign error", e));
  }
}
