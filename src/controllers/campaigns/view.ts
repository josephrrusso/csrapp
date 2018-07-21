
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
    if (item.entity == 'tickets'){
      marker.addListener('click', (event) => {
        this.viewTicket(item['id']);
      });
    }
    if (item.entity == 'users'){
      marker.addListener('click', (event) => {
        this.viewUser(item['id']);
      });
    }
    if (item.entity == 'locations'){
      marker.addListener('click', (event) => {
        this.viewLocation(item['id']);
      });
    }
    

    this.markers.push(marker);
  }

  viewTicket(id) {
    this.navCtrl.push('TicketsInfoPage', {ticket_id: id, campaign_id: this.campaign.id});
  }

  viewUser(id) {
    this.navCtrl.push('UsersInfoPage', {user_id: id, campaign_id: this.campaign.id});
  }

  viewLocation(id) {
    this.navCtrl.push('LocationsInfoPage', {location_id: id, campaign_id: this.campaign.id});
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
    //this.removeHelper();
  }

  mapit(campaign_id) {
    //this.loadMap();
    this.deleteMarkers();
    var el = $("#mapchecks_"+campaign_id);
    var checkedMaps = [];
    $(el).closest(".container").find("input:hidden").each(function() {
      checkedMaps.push($(this).val());
    });
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

  mapitHelper(group) {
    if ($("#group" + group.id).hasClass("off")){
      $("#group" + group.id).removeClass("off");
      $("#group" + group.id).addClass("on");
      var input = document.createElement("input");
      input.type = "hidden"; input.className = "hiddenInput"; input.value = group.id; input.id = "input_" + group.id;
      var div = $(".finder")[0];
      div.appendChild(input);
    } else {
      var input2 = $("#input_" + group.id)[0];
      if (input2){
        input2.parentNode.removeChild(input2);
        $("#group" + group.id).removeClass("on");
        $("#group" + group.id).addClass("off");
      }
    }

    $(".toggleiconmap"+group.id).each(function() {
      if ($(this).hasClass('dn')) {
        $(this).removeClass('dn');
        $(this).addClass('dib');
      }      
      else {
        $(this).addClass('dn');
        $(this).removeClass('dib');
      }
    });
  }
 
  loadMap() {
    
    if (window.navigator.onLine) {
      this.geolocation.getCurrentPosition().then((position) => {
        console.log(this.geolocation);
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
   
        let mapOptions = {
          center: latLng,
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
   
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      }, (err) => {
        console.log(err.code);
        console.log(err.message);
        let latLng = new google.maps.LatLng(29.35, -95.75);
   
        let mapOptions = {
          center: latLng,
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
     
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      });
    }
    else {
      alert('No internet connection detected. Please check internet connection and try again.')
    }
  }


  
  editCampaigns(campaign: CampaignsModel) {
    this.navCtrl.push('CampaignsEditPage', {campaign: campaign});
  }
  
  deleteCampaigns(campaign: CampaignsModel) {
    this.campaignsService.delete(campaign.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete campaign error", e)); 
  }

  toggle(id) {
    $("#div_" + id).toggle();
    $(".toggleiconmapgroup"+id).each(function() {
      if ($(this).hasClass('dn')) {
        $(this).removeClass('dn');
        $(this).addClass('dib');
      }      
      else {
        $(this).addClass('dn');
        $(this).removeClass('dib');
      }
    });
  }
  removeHelper(){
    var inputs = $(".hiddenInput");
    var button;
    for (var i = inputs.length - 1; i >= 0; i--) {
      inputs[i].parentNode.removeChild(inputs[i]);
      button = $("#group"+ inputs[i].value)[0];
      //console.log(button);
      $("#group" + button.id).removeClass("on");
      $("#group" + button.id).addClass("off");
      //button.className = "mapLayerButtonOff item item-block item-md activated";
    }
  }

  notification() {
    this.navCtrl.push('NotificationsPage');
  }
}

