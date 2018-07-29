
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {OrganizationsService} from '../../providers/organizations-service';

@IonicPage({ name: 'OrganizationsAddPage', segment: 'organizations-add-page' })
@Component({
  selector: 'page-organization-add-page',
  templateUrl: '../../pages/organizations/add.html',
})
export class OrganizationsAddPage extends ProtectedPage {

  private organizationData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public organizationsService: OrganizationsService) {

    super(navCtrl, navParams, storage);

    this.organizationData = this.formBuilder.group({
       id: ['', Validators.required],
         active: ['', Validators.required],
         status: ['', Validators.required],
         created: ['', Validators.required],
         modified: ['', Validators.required],
         created_epoch: ['', Validators.required],
         modified_epoch: ['', Validators.required],
         owner: ['', Validators.required],
         ownerg: ['', Validators.required],
         organization_type_id: ['', Validators.required],
         name: ['', Validators.required],
         last_contacted: ['', Validators.required],
         latitude: ['', Validators.required],
         longitude: ['', Validators.required],
         organization_id_root: ['', Validators.required],
         organization_id_parent: ['', Validators.required],
         first_name: ['', Validators.required],
         last_name: ['', Validators.required],
         polygons: ['', Validators.required],
         security_profile_id: ['', Validators.required],
         
    });
  }

  process() {
    this.organizationsService.add(this.organizationData.value)
      .then(() => this.navCtrl.push('OrganizationsPage'))
      .catch((e) => console.log("Add organization error", e));
  }
}
