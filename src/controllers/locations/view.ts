
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {LocationsService} from '../../providers/locations-service';
import {LocationsModel} from '../../models/locations.model';

@IonicPage()
@Component({
  selector: 'page-location-info-page',
  templateUrl: '../../pages/locations/view.html',
})
export class LocationsInfoPage extends ProtectedPage {

  private location: LocationsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public locationsService: LocationsService) {

    super(navCtrl, navParams, storage);
    
    this.location = navParams.get('location');

  }
  
  editLocations(location: LocationsModel) {
    this.navCtrl.push('LocationsEditPage', {location: location});
  }
  
  deleteLocations(location: LocationsModel) {
    this.locationsService.delete(location.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete location error", e)); 
  }
}

