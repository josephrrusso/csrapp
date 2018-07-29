
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {UserTicketsService} from '../../providers/userTickets-service';
import {UserTicketsModel} from '../../models/userTickets.model';

@IonicPage({ name: 'UserTicketsInfo', segment: 'user-tickets-info' })
@Component({
  selector: 'page-userTicket-info-page',
  templateUrl: '../../pages/userTickets/view.html',
})
export class UserTicketsInfoPage extends ProtectedPage {

  private userTicket: UserTicketsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public userTicketsService: UserTicketsService) {

    super(navCtrl, navParams, storage);
    
    this.userTicket = navParams.get('userTicket');

  }
  
  editUserTickets(userTicket: UserTicketsModel) {
    this.navCtrl.push('UserTicketsEditPage', {userTicket: userTicket});
  }
  
  deleteUserTickets(userTicket: UserTicketsModel) {
    this.userTicketsService.delete(userTicket.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete userTicket error", e)); 
  }
}

