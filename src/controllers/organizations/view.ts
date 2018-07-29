
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {OrganizationsService} from '../../providers/organizations-service';
import {OrganizationsModel} from '../../models/organizations.model';

@IonicPage({ name: 'OrganizationsInfoPage', segment: 'organizations-info-page' })
@Component({
  selector: 'page-organization-info-page',
  templateUrl: '../../pages/organizations/view.html',
})
export class OrganizationsInfoPage extends ProtectedPage {

  private organization: OrganizationsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public organizationsService: OrganizationsService) {

    super(navCtrl, navParams, storage);
    
    this.organization = navParams.get('organization');

  }
  
  editOrganizations(organization: OrganizationsModel) {
    this.navCtrl.push('OrganizationsEditPage', {organization: organization});
  }
  
  deleteOrganizations(organization: OrganizationsModel) {
    this.organizationsService.delete(organization.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete organization error", e)); 
  }
}

