
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {LocationsService} from '../../providers/locations-service';
import {LocationsModel} from '../../models/locations.model';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-location-info-page',
  templateUrl: '../../pages/locations/view.html',
})
export class LocationsInfoPage extends ProtectedPage {

  private campaign_id: number;
  private location_id: number;
  private location: LocationsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public geolocation: Geolocation,
    public locationsService: LocationsService) {

    super(navCtrl, navParams, storage);
    
    //this.location = navParams.get('location');
    this.location_id = navParams.get('location_id');
    this.campaign_id = navParams.get('campaign_id');

  }

  ionViewWillEnter() {
    this.locationsService.view(this.location_id, this.campaign_id)
      .then(location => {
        this.location = location;
      })
      .catch(e => console.log("View users error", e));
  }

  ionViewDidLoad() { }

  
  editLocations(location: LocationsModel) {
    this.navCtrl.push('LocationsEditPage', {location: location});
  }
  
  deleteLocations(location: LocationsModel) {
    this.locationsService.delete(location.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete location error", e)); 
  }

  notification() {
    this.navCtrl.push('NotificationsPage');
  }
}

