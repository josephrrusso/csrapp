
import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {TicketsService} from '../../providers/tickets-service';
import {TicketsModel} from '../../models/tickets.model';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-ticket-info-page',
  templateUrl: '../../pages/tickets/view.html',
})
export class TicketsInfoPage extends ProtectedPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  private ticket_id: number;
  private ticket: TicketsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public geolocation: Geolocation,
    public ticketsService: TicketsService) {

    super(navCtrl, navParams, storage);
    
    this.ticket_id = navParams.get('ticket_id');

  }

  ionViewWillEnter() {
    this.ticketsService.view(this.ticket_id)
      .then(ticket => {
        this.ticket = ticket;
        this.loadMap(ticket.data.latitude, ticket.data.longitude);
      })
      .catch(e => console.log("View tickets error", e));
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
  
  editTickets(ticket: TicketsModel) {
    this.navCtrl.push('TicketsEditPage', {ticket: ticket});
  }
  
  deleteTickets(ticket: TicketsModel) {
    this.ticketsService.delete(ticket.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete ticket error", e)); 
  }


}

