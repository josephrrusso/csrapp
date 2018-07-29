
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {LocationsService} from '../../providers/locations-service';
import {LocationsModel} from '../../models/locations.model';

@IonicPage({ name: 'LocationsPage', segment: 'locations-page' })
@Component({
  selector: 'page-locations-page',
  templateUrl: '../../pages/locations/index.html',
})
export class LocationsPage extends ProtectedPage {

  public locations: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public locationsService: LocationsService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.locationsService.index()
      .then(locations => this.locations = locations.data)
      .catch(e => console.log("View locations error", e));
  }
  
  locationInfo(location: LocationsModel) {
    this.navCtrl.push('LocationsInfoPage', {location: location});
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
}
