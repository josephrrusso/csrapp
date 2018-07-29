
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {UserTicketsService} from '../../providers/userTickets-service';
import {UserTicketsModel} from '../../models/userTickets.model';

@IonicPage({ name: 'UserTickets', segment: 'user-tickets' })
@Component({
  selector: 'page-userTickets-page',
  templateUrl: '../../pages/userTickets/index.html',
})
export class UserTicketsPage extends ProtectedPage {

  public userTickets: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public userTicketsService: UserTicketsService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.userTicketsService.index()
      .then(userTickets => this.userTickets = userTickets.data)
      .catch(e => console.log("View userTickets error", e));
  }
  
  userTicketInfo(userTicket: UserTicketsModel) {
    this.navCtrl.push('UserTicketsInfoPage', {userTicket: userTicket});
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
}
