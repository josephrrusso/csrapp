import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular'
import {AuthService} from '../../providers/auth-service';

export class ProtectedPage {

  //geolocation: Geolocation;
  //alertCtrl: AlertController;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage
  ) {
    //this.geolocation = Geolocation;
    //this.alertCtrl = AlertController;
  }

  ionViewCanEnter() {
    // Get token expiry. If past due, then log out
    
    // If no token, log out
    this.storage.get('id_token')
      .then(id_token => {
        if (id_token === null) {
          console.log("token not found")
          /*
          this.storage.remove('user');
          this.storage.remove('id_token');
          this.storage.remove('expiry');
          */
          this.navCtrl.setRoot('LoginPage');
          return false;
        }
        else {
          this.storage.get('expiry')
          .then(expiry => {
            var now = Math.floor((new Date).getTime()/1000);
            if (expiry < now) {
              console.log("expiry epoch surpassed")
              /*
              this.storage.remove('user');
              this.storage.remove('id_token');
              this.storage.remove('expiry');
              */
              this.navCtrl.setRoot('LoginPage');
              return false;
            }
            else {
              return true;
            }
          })
          .catch(e => console.log("Page Auth Error", e));
        }
      })
      .catch(e => console.log("Page Auth Error", e));

    //return true;
  }
}
