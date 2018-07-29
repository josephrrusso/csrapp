
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {OrganizationsService} from '../../providers/organizations-service';
import {OrganizationsModel} from '../../models/organizations.model';

@IonicPage({ name: 'OrganizationsPage', segment: 'organizations-page' })
@Component({
  selector: 'page-organizations-page',
  templateUrl: '../../pages/organizations/index.html',
})
export class OrganizationsPage extends ProtectedPage {

  public organizations: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public organizationsService: OrganizationsService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.organizationsService.index()
      .then(organizations => this.organizations = organizations.data)
      .catch(e => console.log("View organizations error", e));
  }
  
  organizationInfo(organization: OrganizationsModel) {
    this.navCtrl.push('OrganizationsInfoPage', {organization: organization});
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
}
