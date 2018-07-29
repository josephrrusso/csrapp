import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@IonicPage({ segment: 'users-terms-page' })
@Component({
  selector: 'page-user-terms-page',
  templateUrl: '../../pages/users/terms.html',
})
export class UsersTermsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage) {    
  }
  
  ionViewWillEnter() {

  }
}

