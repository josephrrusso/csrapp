
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {TicketsService} from '../../providers/tickets-service';
import {TicketsModel} from '../../models/tickets.model';

@IonicPage({ name: 'Tickets', segment: 'tickets' })
@Component({
  selector: 'page-tickets-page',
  templateUrl: '../../pages/tickets/index.html',
})
export class TicketsPage extends ProtectedPage {

  public tickets: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public ticketsService: TicketsService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.ticketsService.index()
      .then(tickets => this.tickets = tickets.data)
      .catch(e => console.log("View tickets error", e));
  }
  
  ticketInfo(ticket: TicketsModel) {
    this.navCtrl.push('TicketsInfoPage', {ticket: ticket});
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
}
