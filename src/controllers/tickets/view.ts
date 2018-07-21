import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {TicketsService} from '../../providers/tickets-service';
import {TicketsModel} from '../../models/tickets.model';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-ticket-info-page',
  templateUrl: '../../pages/tickets/view.html',
})
export class TicketsInfoPage extends ProtectedPage {

  private campaign_id: number;
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
    this.campaign_id = navParams.get('campaign_id');

  }

  ionViewWillEnter() {
    this.ticketsService.view(this.ticket_id, this.campaign_id)
      .then(ticket => {
        this.ticket = ticket;
      })
      .catch(e => console.log("View tickets error", e));
  }

  ionViewDidLoad() { }
  
  editTickets(ticket: TicketsModel) {
    this.navCtrl.push('TicketsEditPage', {ticket: ticket});
  }
  
  deleteTickets(ticket: TicketsModel) {
    this.ticketsService.delete(ticket.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete ticket error", e)); 
  }

  notification() {
    this.navCtrl.push('NotificationsPage');
  }
}

