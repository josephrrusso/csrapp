
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {GroupsService} from '../../providers/groups-service';
import {GroupsModel} from '../../models/groups.model';

@IonicPage({ name: 'GroupsEditPage', segment: 'groups-edit-page' })
@Component({
  selector: 'page-group-edit-page',
  templateUrl: '../../pages/groups/edit.html',
})
export class GroupsEditPage extends ProtectedPage {

  private groupData: FormGroup;
  private group: GroupsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public groupsService: GroupsService) {

    super(navCtrl, navParams, storage);

    this.group = navParams.get('group');


    this.groupData = this.formBuilder.group({
         id: [this.group.id, Validators.required],
         active: [this.group.active, Validators.required],
         status: [this.group.status, Validators.required],
         created: [this.group.created, Validators.required],
         modified: [this.group.modified, Validators.required],
         created_epoch: [this.group.created_epoch, Validators.required],
         modified_epoch: [this.group.modified_epoch, Validators.required],
         owner: [this.group.owner, Validators.required],
         ownerg: [this.group.ownerg, Validators.required],
         organization_id: [this.group.organization_id, Validators.required],
         campaign_id: [this.group.campaign_id, Validators.required],
         name: [this.group.name, Validators.required],
         has_users: [this.group.has_users, Validators.required],
         has_locations: [this.group.has_locations, Validators.required],
         has_tickets: [this.group.has_tickets, Validators.required],
         has_organizations: [this.group.has_organizations, Validators.required],
         has_needs: [this.group.has_needs, Validators.required],
         has_datapoints: [this.group.has_datapoints, Validators.required],
         group_type_id: [this.group.group_type_id, Validators.required],
         is_default: [this.group.is_default, Validators.required],
         description: [this.group.description, Validators.required],
         icon: [this.group.icon, Validators.required],
         color: [this.group.color, Validators.required],
         priority: [this.group.priority, Validators.required],
         tension: [this.group.tension, Validators.required],
         is_org_chart: [this.group.is_org_chart, Validators.required],
         first_name: [this.group.first_name, Validators.required],
         last_name: [this.group.last_name, Validators.required],
         polygons: [this.group.polygons, Validators.required],
         work_status: [this.group.work_status, Validators.required],
         is_role: [this.group.is_role, Validators.required],
         is_persistent: [this.group.is_persistent, Validators.required],
         is_org_admin: [this.group.is_org_admin, Validators.required],
         is_org_user: [this.group.is_org_user, Validators.required],
         is_org_public: [this.group.is_org_public, Validators.required],
         latitude: [this.group.latitude, Validators.required],
         longitude: [this.group.longitude, Validators.required],
         map_displayed: [this.group.map_displayed, Validators.required],
         
    });
  }

  process() {

    let updatedGroups = Object.assign(this.group, this.groupData.value);

    this.groupsService.edit(updatedGroups)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("Add group error", e));
  }
}
