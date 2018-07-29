
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {LocationsService} from '../../providers/locations-service';
import {LocationsModel} from '../../models/locations.model';

@IonicPage({ name: 'LocationsEdit', segment: 'locations-edit' })
@Component({
  selector: 'page-location-edit-page',
  templateUrl: '../../pages/locations/edit.html',
})
export class LocationsEditPage extends ProtectedPage {

  private locationData: FormGroup;
  private location: LocationsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public locationsService: LocationsService) {

    super(navCtrl, navParams, storage);

    this.location = navParams.get('location');


    this.locationData = this.formBuilder.group({
         id: [this.location.id, Validators.required],
         active: [this.location.active, Validators.required],
         status: [this.location.status, Validators.required],
         created: [this.location.created, Validators.required],
         modified: [this.location.modified, Validators.required],
         created_epoch: [this.location.created_epoch, Validators.required],
         modified_epoch: [this.location.modified_epoch, Validators.required],
         owner: [this.location.owner, Validators.required],
         ownerg: [this.location.ownerg, Validators.required],
         organization_id: [this.location.organization_id, Validators.required],
         location_type_id: [this.location.location_type_id, Validators.required],
         name: [this.location.name, Validators.required],
         latitude: [this.location.latitude, Validators.required],
         longitude: [this.location.longitude, Validators.required],
         last_contacted: [this.location.last_contacted, Validators.required],
         campaign_id: [this.location.campaign_id, Validators.required],
         first_name: [this.location.first_name, Validators.required],
         last_name: [this.location.last_name, Validators.required],
         polygons: [this.location.polygons, Validators.required],
         geofence: [this.location.geofence, Validators.required],
         
    });
  }

  process() {

    let updatedLocations = Object.assign(this.location, this.locationData.value);

    this.locationsService.edit(updatedLocations)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("Add location error", e));
  }
}
