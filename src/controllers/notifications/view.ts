
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {NotificationsService} from '../../providers/notifications-service';
import {NotificationsModel} from '../../models/notifications.model';

@IonicPage()
@Component({
  selector: 'page-notification-info-page',
  templateUrl: '../../pages/notifications/view.html',
})
export class NotificationsInfoPage extends ProtectedPage {

  private notification: NotificationsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public notificationsService: NotificationsService) {

    super(navCtrl, navParams, storage);
    
    this.notification = navParams.get('notification');

  }
  
  editNotifications(notification: NotificationsModel) {
    this.navCtrl.push('NotificationsEditPage', {notification: notification});
  }
  
  deleteNotifications(notification: NotificationsModel) {
    this.notificationsService.delete(notification.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete notification error", e)); 
  }
}

