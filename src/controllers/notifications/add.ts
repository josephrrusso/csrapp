
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {NotificationsService} from '../../providers/notifications-service';

@IonicPage({ name: 'NotificationsAddPage', segment: 'notifications-add-page' })
@Component({
  selector: 'page-notification-add-page',
  templateUrl: '../../pages/notifications/add.html',
})
export class NotificationsAddPage extends ProtectedPage {

  private notificationData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public notificationsService: NotificationsService) {

    super(navCtrl, navParams, storage);

    this.notificationData = this.formBuilder.group({
       id: ['', Validators.required],
         active: ['', Validators.required],
         status: ['', Validators.required],
         created: ['', Validators.required],
         modified: ['', Validators.required],
         created_epoch: ['', Validators.required],
         modified_epoch: ['', Validators.required],
         notes: ['', Validators.required],
         user_id: ['', Validators.required],
         title: ['', Validators.required],
         description: ['', Validators.required],
         type: ['', Validators.required],
         read_status: ['', Validators.required],
         
    });
  }

  process() {
    this.notificationsService.add(this.notificationData.value)
      .then(() => this.navCtrl.push('NotificationsPage'))
      .catch((e) => console.log("Add notification error", e));
  }
}
