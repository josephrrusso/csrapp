
import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {TicketsService} from '../../providers/tickets-service';
import {TicketsModel} from '../../models/tickets.model';

declare var google;

@IonicPage()
@Component({
  selector: 'page-ticket-info-page',
  templateUrl: '../../pages/tickets/view.html',
})
export class TicketsInfoPage extends ProtectedPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  private ticket: TicketsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public ticketsService: TicketsService) {

    super(navCtrl, navParams, storage);
    
    this.ticket = navParams.get('ticket');

  }

  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
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

