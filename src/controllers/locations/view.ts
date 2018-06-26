
import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {LocationsService} from '../../providers/locations-service';
import {LocationsModel} from '../../models/locations.model';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-location-info-page',
  templateUrl: '../../pages/locations/view.html',
})
export class LocationsInfoPage extends ProtectedPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  private location_id: number;
  private location: LocationsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public geolocation: Geolocation,
    public locationsService: LocationsService) {

    super(navCtrl, navParams, storage);
    
    //this.location = navParams.get('location');
    this.location_id = navParams.get('location_id');

  }

  ionViewWillEnter() {
    this.locationsService.view(this.location_id)
      .then(location => {
        this.location = location;
        this.loadMap(location.data.latitude, location.data.longitude);
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
  
  editLocations(location: LocationsModel) {
    this.navCtrl.push('LocationsEditPage', {location: location});
  }
  
  deleteLocations(location: LocationsModel) {
    this.locationsService.delete(location.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete location error", e)); 
  }

  notification() {
    this.navCtrl.push('NotificationsPage');
  }
}

