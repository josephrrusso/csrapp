
import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {CampaignsService} from '../../providers/campaigns-service';
import {CampaignsModel} from '../../models/campaigns.model';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-campaign-info-page',
  templateUrl: '../../pages/campaigns/view.html',
})
export class CampaignsInfoPage extends ProtectedPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  private campaign: CampaignsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public campaignsService: CampaignsService,
    public geolocation: Geolocation
  ) {

    super(navCtrl, navParams, storage);
    
    this.campaign = navParams.get('campaign');

  }

  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) => {
      let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
   
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    });
  }
  
  editCampaigns(campaign: CampaignsModel) {
    this.navCtrl.push('CampaignsEditPage', {campaign: campaign});
  }
  
  deleteCampaigns(campaign: CampaignsModel) {
    this.campaignsService.delete(campaign.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete campaign error", e)); 
  }
}

