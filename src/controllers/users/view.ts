
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {UsersService} from '../../providers/users-service';
import {UsersModel} from '../../models/users.model';

@IonicPage()
@Component({
  selector: 'page-user-info-page',
  templateUrl: '../../pages/users/view.html',
})
export class UsersInfoPage extends ProtectedPage {

  private user: UsersModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public usersService: UsersService) {

    super(navCtrl, navParams, storage);
    
    this.user = navParams.get('user');

  }
  
  editUsers(user: UsersModel) {
    this.navCtrl.push('UsersEditPage', {user: user});
  }
  
  deleteUsers(user: UsersModel) {
    this.usersService.delete(user.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete user error", e)); 
  }
}

