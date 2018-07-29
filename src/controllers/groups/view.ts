
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {GroupsService} from '../../providers/groups-service';
import {GroupsModel} from '../../models/groups.model';

@IonicPage({ segment: 'groups-info-page' })
@Component({
  selector: 'page-group-info-page',
  templateUrl: '../../pages/groups/view.html',
})
export class GroupsInfoPage extends ProtectedPage {

  private group: GroupsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public groupsService: GroupsService) {

    super(navCtrl, navParams, storage);
    
    this.group = navParams.get('group');

  }
  
  editGroups(group: GroupsModel) {
    this.navCtrl.push('GroupsEditPage', {group: group});
  }
  
  deleteGroups(group: GroupsModel) {
    this.groupsService.delete(group.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete group error", e)); 
  }
}

