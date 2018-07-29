
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {SmsMessagesService} from '../../providers/smsMessages-service';
import {SmsMessagesModel} from '../../models/smsMessages.model';

@IonicPage()
@Component({
  selector: 'page-smsMessage-edit-page',
  templateUrl: '../../pages/smsMessages/edit.html',
})
export class SmsMessagesEditPage extends ProtectedPage {

  private smsMessageData: FormGroup;
  private smsMessage: SmsMessagesModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public smsMessagesService: SmsMessagesService) {

    super(navCtrl, navParams, storage);

    this.smsMessage = navParams.get('smsMessage');


    this.smsMessageData = this.formBuilder.group({
         id: [this.smsMessage.id, Validators.required],
         active: [this.smsMessage.active, Validators.required],
         status: [this.smsMessage.status, Validators.required],
         created: [this.smsMessage.created, Validators.required],
         modified: [this.smsMessage.modified, Validators.required],
         created_epoch: [this.smsMessage.created_epoch, Validators.required],
         modified_epoch: [this.smsMessage.modified_epoch, Validators.required],
         owner: [this.smsMessage.owner, Validators.required],
         ownerg: [this.smsMessage.ownerg, Validators.required],
         phone_number_id: [this.smsMessage.phone_number_id, Validators.required],
         phone_number_idr: [this.smsMessage.phone_number_idr, Validators.required],
         send_time: [this.smsMessage.send_time, Validators.required],
         message: [this.smsMessage.message, Validators.required],
         
    });
  }

  process() {

    let updatedSmsMessages = Object.assign(this.smsMessage, this.smsMessageData.value);

    this.smsMessagesService.edit(updatedSmsMessages)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("Add smsMessage error", e));
  }
}
