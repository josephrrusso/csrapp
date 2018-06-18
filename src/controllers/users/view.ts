
import {Component, ViewChild, ElementRef} from '@angular/core';
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

  @ViewChild('map') mapElement: ElementRef;
  map: any;

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

  }
  
  ionViewWillEnter() {
    this.usersService.view(this.user_id)
      .then(user => {
        this.user = user;
        this.loadMap(user.data.latitude, user.data.longitude);
      })
      .catch(e => console.log("View users error", e));
  }

  ionViewDidLoad(){
  }
 
  loadMap(lat: number, lng: number) {
 
    let latLng = new google.maps.LatLng(lat, lng);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.dropMarker(lat, lng);

    this.geolocation.getCurrentPosition().then((position) => {
      this.dropMarker(position.coords.latitude, position.coords.longitude);
      var fitBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        new google.maps.LatLng(lat, lng)
      );
      this.map.fitBounds(fitBounds);
    }, (err) => {});
  }


  dropMarker(latitude, longitude) {
    var icon = 'http://crowdsourcerescue.com/img/mappin3.png';
    var myLatLng = new google.maps.LatLng({lat: latitude, lng: longitude});
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      icon: icon,
    });
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

