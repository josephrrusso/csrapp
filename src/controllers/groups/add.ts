
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {GroupsService} from '../../providers/groups-service';

@IonicPage({ name: 'GroupsAdd', segment: 'groups-add' })
@Component({
  selector: 'page-group-add-page',
  templateUrl: '../../pages/groups/add.html',
})
export class GroupsAddPage extends ProtectedPage {

  private groupData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public groupsService: GroupsService) {

    super(navCtrl, navParams, storage);

    this.groupData = this.formBuilder.group({
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
         campaign_id: ['', Validators.required],
         name: ['', Validators.required],
         has_users: ['', Validators.required],
         has_locations: ['', Validators.required],
         has_tickets: ['', Validators.required],
         has_organizations: ['', Validators.required],
         has_needs: ['', Validators.required],
         has_datapoints: ['', Validators.required],
         group_type_id: ['', Validators.required],
         is_default: ['', Validators.required],
         description: ['', Validators.required],
         icon: ['', Validators.required],
         color: ['', Validators.required],
         priority: ['', Validators.required],
         tension: ['', Validators.required],
         is_org_chart: ['', Validators.required],
         first_name: ['', Validators.required],
         last_name: ['', Validators.required],
         polygons: ['', Validators.required],
         work_status: ['', Validators.required],
         is_role: ['', Validators.required],
         is_persistent: ['', Validators.required],
         is_org_admin: ['', Validators.required],
         is_org_user: ['', Validators.required],
         is_org_public: ['', Validators.required],
         latitude: ['', Validators.required],
         longitude: ['', Validators.required],
         map_displayed: ['', Validators.required],
         
    });
  }

  process() {
    this.groupsService.add(this.groupData.value)
      .then(() => this.navCtrl.push('GroupsPage'))
      .catch((e) => console.log("Add group error", e));
  }
}
