
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {NotificationsService} from '../../providers/notifications-service';
import {NotificationsModel} from '../../models/notifications.model';

@IonicPage()
@Component({
  selector: 'page-notifications-page',
  templateUrl: '../../pages/notifications/index.html',
})
export class NotificationsPage extends ProtectedPage {

  public notifications: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public notificationsService: NotificationsService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.notificationsService.index()
      .then(notifications => this.notifications = notifications.data)
      .catch(e => console.log("View notifications error", e));
  }
  
  notificationInfo(notification: NotificationsModel) {
    this.navCtrl.push('NotificationsInfoPage', {notification: notification});
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
  notification() {
    this.navCtrl.push('NotificationsPage');
  }
}
