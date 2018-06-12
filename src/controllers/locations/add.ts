
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {LocationsService} from '../../providers/locations-service';

@IonicPage()
@Component({
  selector: 'page-location-add-page',
  templateUrl: '../../pages/locations/add.html',
})
export class LocationsAddPage extends ProtectedPage {

  private locationData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public locationsService: LocationsService) {

    super(navCtrl, navParams, storage);

    this.locationData = this.formBuilder.group({
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
         location_type_id: ['', Validators.required],
         name: ['', Validators.required],
         latitude: ['', Validators.required],
         longitude: ['', Validators.required],
         last_contacted: ['', Validators.required],
         campaign_id: ['', Validators.required],
         first_name: ['', Validators.required],
         last_name: ['', Validators.required],
         polygons: ['', Validators.required],
         geofence: ['', Validators.required],
         
    });
  }

  process() {
    this.locationsService.add(this.locationData.value)
      .then(() => this.navCtrl.push('LocationsPage'))
      .catch((e) => console.log("Add location error", e));
  }
}
