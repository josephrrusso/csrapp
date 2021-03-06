
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {UsersService} from '../../providers/users-service';
import {UsersModel} from '../../models/users.model';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-user-info-page',
  templateUrl: '../../pages/users/view.html',
})
export class UsersInfoPage extends ProtectedPage {

  private campaign_id: number;
  private user_id: number;
  private user: UsersModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public geolocation: Geolocation,
    public usersService: UsersService) {

    super(navCtrl, navParams, storage);
    
    //this.user = navParams.get('user');
    this.user_id = navParams.get('user_id');
    this.campaign_id = navParams.get('campaign_id');

  }

  ionViewCanEnter() {
    if (this.user_id) {
      return true;
    }
    return false;
  }
  
  ionViewWillEnter() {
    this.usersService.view(this.user_id, this.campaign_id)
      .then(user => {
        user.scope = this.campaign_id;
        this.user = user;
      })
      .catch(e => console.log("View users error", e));
  }

  ionViewDidLoad() { }


  editUsers(user: UsersModel) {
    this.navCtrl.push('UsersEditPage', {user: user});
  }
  
  deleteUsers(user: UsersModel) {
    this.usersService.delete(user.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete user error", e)); 
  }
  notification() {
    this.navCtrl.push('NotificationsPage');
  }
}

