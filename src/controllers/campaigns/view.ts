
import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {GroupsService} from '../../providers/groups-service';
import {CampaignsService} from '../../providers/campaigns-service';
import {CampaignsModel} from '../../models/campaigns.model';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import * as $ from 'jquery'

declare var google;

@IonicPage()
@Component({
  selector: 'page-campaign-info-page',
  templateUrl: '../../pages/campaigns/view.html',
})
export class CampaignsInfoPage extends ProtectedPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  public markers: any;

  private campaign: CampaignsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public campaignsService: CampaignsService,
    public groupsService: GroupsService,
    public geolocation: Geolocation,
    public alertCtrl: AlertController
  ) {

    super(navCtrl, navParams, storage);
    
    this.campaign = navParams.get('campaign');
    this.markers = [];
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  dropMarker(map, latitude, longitude, item, group) {
    var icon = group['icon'];
    if (icon == "") {
    //icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=*|'+group['color']+'|000000';
    icon = 'http://crowdsourcerescue.com/img/mappin3.png';
    }
    var myLatLng = new google.maps.LatLng({lat: latitude, lng: longitude});
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: icon,
    });
    
    marker.addListener('click', (event) => {
      this.viewTicket(item['id']);
    });

    this.markers.push(marker);
  }

  viewTicket(id) {
    this.navCtrl.push('TicketsInfoPage', {ticket_id: id});
  }

  // Sets the map on all markers in the array.
  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  clearMarkers() {
    this.setMapOnAll(null);
  }

  // Deletes all markers in the array by removing references to them.
  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }

  mapit(campaign_id) {
    //this.loadMap();
    var el = $("#mapchecks_"+campaign_id);
    var checkedMaps = [];
    $(el).closest(".container").find("input:checked").each(function() {
      checkedMaps.push($(this).val());
    });
    console.log(checkedMaps)
    for (var m in checkedMaps) {
      this.groupsService.membershipapi(checkedMaps[m])
      .then(
        results => {
          for (var x in results['members']) {
            var m = results['members'][x];
            this.dropMarker(this.map, parseFloat(m['lat']), parseFloat(m['lon']), m, results['group']);
          }
        }
      )
      .catch(e => console.log("Delete campaign error", e));
    }
  }
 
  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) => {
      let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
   
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    });
  }
  
  editCampaigns(campaign: CampaignsModel) {
    this.navCtrl.push('CampaignsEditPage', {campaign: campaign});
  }
  
  deleteCampaigns(campaign: CampaignsModel) {
    this.campaignsService.delete(campaign.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete campaign error", e)); 
  }
}

