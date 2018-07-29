
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {OrganizationsService} from '../../providers/organizations-service';
import {OrganizationsModel} from '../../models/organizations.model';

@IonicPage()
@Component({
  selector: 'page-organization-edit-page',
  templateUrl: '../../pages/organizations/edit.html',
})
export class OrganizationsEditPage extends ProtectedPage {

  private organizationData: FormGroup;
  private organization: OrganizationsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public organizationsService: OrganizationsService) {

    super(navCtrl, navParams, storage);

    this.organization = navParams.get('organization');


    this.organizationData = this.formBuilder.group({
         id: [this.organization.id, Validators.required],
         active: [this.organization.active, Validators.required],
         status: [this.organization.status, Validators.required],
         created: [this.organization.created, Validators.required],
         modified: [this.organization.modified, Validators.required],
         created_epoch: [this.organization.created_epoch, Validators.required],
         modified_epoch: [this.organization.modified_epoch, Validators.required],
         owner: [this.organization.owner, Validators.required],
         ownerg: [this.organization.ownerg, Validators.required],
         organization_type_id: [this.organization.organization_type_id, Validators.required],
         name: [this.organization.name, Validators.required],
         last_contacted: [this.organization.last_contacted, Validators.required],
         latitude: [this.organization.latitude, Validators.required],
         longitude: [this.organization.longitude, Validators.required],
         organization_id_root: [this.organization.organization_id_root, Validators.required],
         organization_id_parent: [this.organization.organization_id_parent, Validators.required],
         first_name: [this.organization.first_name, Validators.required],
         last_name: [this.organization.last_name, Validators.required],
         polygons: [this.organization.polygons, Validators.required],
         security_profile_id: [this.organization.security_profile_id, Validators.required],
         
    });
  }

  process() {

    let updatedOrganizations = Object.assign(this.organization, this.organizationData.value);

    this.organizationsService.edit(updatedOrganizations)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("Add organization error", e));
  }
}
