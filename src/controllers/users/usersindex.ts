
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {UsersService} from '../../providers/users-service';
import {UsersModel} from '../../models/users.model';

@IonicPage()
@Component({
  selector: 'page-users-page',
  templateUrl: '../../pages/users/index.html',
})
export class UsersPage extends ProtectedPage {

  public users: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public usersService: UsersService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.usersService.index()
      .then(users => this.users = users.data)
      .catch(e => console.log("View users error", e));
  }
  
  userInfo(user: UsersModel) {
    this.navCtrl.push('UsersInfoPage', {user: user});
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
}
