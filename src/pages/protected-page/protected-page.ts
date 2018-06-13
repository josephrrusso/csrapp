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
    this.storage.get('expiry')
      .then(expiry => {
        var now = Math.floor((new Date).getTime()/1000);
        if (expiry < now) {
          this.storage.remove('user');
          this.storage.remove('id_token');
          this.storage.remove('expiry');
          this.navCtrl.setRoot('LoginPage');
          return false;
        }
      })
      .catch(e => console.log("Page Auth Error", e));
    
    // If no token, log out
    this.storage.get('id_token')
      .then(id_token => {
        if (id_token === null) {
          this.storage.remove('user');
          this.storage.remove('id_token');
          this.storage.remove('expiry');
          this.navCtrl.setRoot('LoginPage');
          return false;
        }
      })
      .catch(e => console.log("Page Auth Error", e));

    return true;
  }

  /*
  geolocationFunction() {
    
    this.geolocation.getCurrentPosition().then((position) => {
      //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let alert = this.alertCtrl.create({
        title: 'Longitude',
        subTitle: position.coords.longitude,
        buttons: ['Dismiss']
      });
      alert.present();

    }, (err) => {
      let alert = this.alertCtrl.create({
        title: 'Longitude',
        subTitle: 'No long',
        buttons: ['Dismiss']
      });
      alert.present();
    });
    
  }
  */

  /*
  ionViewDidEnter() {
    setInterval(() => { 

       this.geolocationFunction(); // Now the "this" still references the component
       //console.log("catbaby")
    }, 1000);
  }
  */
}
