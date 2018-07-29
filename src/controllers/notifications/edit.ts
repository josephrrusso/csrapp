
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {NotificationsService} from '../../providers/notifications-service';
import {NotificationsModel} from '../../models/notifications.model';

@IonicPage({ name: 'NotificationsEdit', segment: 'notifications-edit' })
@Component({
  selector: 'page-notification-edit-page',
  templateUrl: '../../pages/notifications/edit.html',
})
export class NotificationsEditPage extends ProtectedPage {

  private notificationData: FormGroup;
  private notification: NotificationsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public notificationsService: NotificationsService) {

    super(navCtrl, navParams, storage);

    this.notification = navParams.get('notification');


    this.notificationData = this.formBuilder.group({
         id: [this.notification.id, Validators.required],
         active: [this.notification.active, Validators.required],
         status: [this.notification.status, Validators.required],
         created: [this.notification.created, Validators.required],
         modified: [this.notification.modified, Validators.required],
         created_epoch: [this.notification.created_epoch, Validators.required],
         modified_epoch: [this.notification.modified_epoch, Validators.required],
         notes: [this.notification.notes, Validators.required],
         user_id: [this.notification.user_id, Validators.required],
         title: [this.notification.title, Validators.required],
         description: [this.notification.description, Validators.required],
         type: [this.notification.type, Validators.required],
         read_status: [this.notification.read_status, Validators.required],
         
    });
  }

  process() {

    let updatedNotifications = Object.assign(this.notification, this.notificationData.value);

    this.notificationsService.edit(updatedNotifications)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("Add notification error", e));
  }
}
