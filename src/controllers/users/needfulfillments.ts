
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {UsersService} from '../../providers/users-service';
import {UsersModel} from '../../models/users.model';
import {NeedFulfillmentsService} from '../../providers/needFulfillments-service';
import {NeedFulfillmentsModel} from '../../models/needfulfillments.model';

@IonicPage()
@Component({
  selector: 'page-needfulfillments-page',
  templateUrl: '../../pages/users/needfulfillments.html',
})
export class NeedFulfillmentsPage extends ProtectedPage {

  public needFulfillments: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public needFulfillmentsService: NeedFulfillmentsService,
    public usersService: UsersService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.needFulfillmentsService.index()
      .then(rs => {
        this.needFulfillments = rs.data
      })
      .catch(e => console.log("View needFulfillments error", e));
  }
  
  userInfo(user: UsersModel) {
    this.navCtrl.push('UsersInfoPage', {user: user});
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }

  viewTicket(id, campaign_id) {
    this.navCtrl.push('TicketsInfoPage', {ticket_id: id, campaign_id: campaign_id});
  }

  viewUser(id, campaign_id) {
    this.navCtrl.push('UsersInfoPage', {user_id: id, campaign_id: campaign_id});
  }

  viewLocation(id, campaign_id) {
    this.navCtrl.push('LocationsInfoPage', {location_id: id, campaign_id: campaign_id});
  }
}
