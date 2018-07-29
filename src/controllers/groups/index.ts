
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {GroupsService} from '../../providers/groups-service';
import {GroupsModel} from '../../models/groups.model';

@IonicPage({ name: 'Groups', segment: 'groups' })
@Component({
  selector: 'page-groups-page',
  templateUrl: '../../pages/groups/index.html',
})
export class GroupsPage extends ProtectedPage {

  public groups: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public groupsService: GroupsService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.groupsService.index()
      .then(groups => this.groups = groups.data)
      .catch(e => console.log("View groups error", e));
  }
  
  groupInfo(group: GroupsModel) {
    this.navCtrl.push('GroupsInfoPage', {group: group});
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
}
