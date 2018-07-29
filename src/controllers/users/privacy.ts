import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@IonicPage({ name: 'UsersPrivacyPage', segment: 'users-privacy-page' })
@Component({
  selector: 'page-user-privacy-page',
  templateUrl: '../../pages/users/privacy.html',
})
export class UsersPrivacyPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage) {    
  }
  
  ionViewWillEnter() {

  }
}

